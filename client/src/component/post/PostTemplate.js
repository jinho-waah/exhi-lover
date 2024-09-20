import * as React from "react";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import Post from "./Post";
import colorSet from "../../lib/styles/colorSet";
import { memo } from "react";
import { Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchShowTagsId, fetchTagName } from "../../lib/api/Api";
import PostSkeleton from "./PostSkeleton";

const TemplateBlock = styled.div`
  padding-top: 2px;
  box-sizing: border-box;
  align-items: center;
  flex-flow: row wrap;
  justify-content: center;
`;

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
`;

const StyledPagination = styled(Pagination)`
  && {
    .MuiPaginationItem-root {
      color: white;
      border-color: white;
      &.Mui-selected {
        background-color: #333;
      }
      &:hover {
        background-color: #555;
      }
    }
  }
`;

const PostTemplate = ({
  shows,
  paginationValue,
  setPaginationValue,
  pageCount,
}) => {
  const observer = useRef();

  const handleObserver = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && paginationValue < pageCount) {
          setPaginationValue((prevPage) => prevPage + 1); // 다음 페이지 로드
        }
      });
      if (node) observer.current.observe(node);
    },
    [paginationValue, pageCount, setPaginationValue]
  );

  // fetchShowTagsId와 fetchTagName을 병합하여 태그 정보를 가져오는 로직
  const {
    data: tags,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tags", shows],
    queryFn: async () => {
      const tagsIdData = await Promise.all(
        shows.map(async (show) => {
          const data = await fetchShowTagsId(show.id);
          return data;
        })
      );

      const tagsIdArray = tagsIdData.reduce((acc, innerArray) => {
        innerArray.forEach((row) => {
          const { exhibition_id, tag_id } = row;
          const index = acc.findIndex(
            (obj) => obj.exhibition_id === exhibition_id
          );
          if (index === -1) {
            acc.push({ exhibition_id, tags: [tag_id] });
          } else {
            acc[index].tags.push(tag_id);
          }
        });
        return acc;
      }, []);

      const tagNamesMap = {};
      for (const { exhibition_id, tags } of tagsIdArray) {
        const tagNames = await Promise.all(
          tags.map(async (tagId) => {
            const data = await fetchTagName(tagId);
            return data;
          })
        );
        tagNamesMap[exhibition_id] = tagNames;
      }

      return tagNamesMap;
    },
    enabled: shows.length > 0, // shows가 있을 때만 실행
    staleTime: 1000 * 60 * 10, // 10분 동안 데이터가 신선하게 유지
    cacheTime: 1000 * 60 * 30, // 30분 동안 캐시 유지
  });

  if (isLoading)
    return (
      <div>
        <PostSkeleton></PostSkeleton>
      </div>
    );
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <>
      <TemplateBlock>
        {shows.map((show, index) => {
          const key = `${show.show_name}`; // 고유한 key 생성
          const colorIndex = index % colorSet.length; // 색상 인덱스
          const color = colorSet[colorIndex]; // colorSet에서 색상 가져오기

          if (index === shows.length - 1) {
            return (
              <div ref={handleObserver} key={key}>
                <Post
                  show={show}
                  color={color}
                  tags={tags?.[show.id]}
                  loading="lazy" // 이미지 Lazy Loading
                />
              </div>
            );
          }

          return (
            <Post
              show={show}
              key={key}
              color={color}
              tags={tags?.[show.id]}
              loading="lazy" // 이미지 Lazy Loading
            />
          );
        })}
        <PaginationBlock>
          <StyledPagination
            count={pageCount}
            page={paginationValue}
            onChange={(event, newPage) => setPaginationValue(newPage)}
          />
        </PaginationBlock>
      </TemplateBlock>
    </>
  );
};

export default memo(PostTemplate);
