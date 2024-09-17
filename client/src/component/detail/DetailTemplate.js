import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailViewer from "./DetailViewer";
import SubHeader from "../layout/SubHeader";
import Footer from "../layout/Footer";
import { useQuery } from "@tanstack/react-query"; // Tanstack Query v5 사용
import {
  fetchShowByShowId,
  fetchShowTagsId,
  fetchTagName,
} from "../../lib/api/Api";

const TemplateBlock = styled.div`
  padding-top: 0.2rem;
  box-sizing: border-box;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

const DetailTemplate = ({ color }) => {
  const { showId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때마다 스크롤 위치를 맨 위로 설정
  }, [showId]);

    // Tanstack Query v5를 사용한 fetchShowByShowId
    const {
      data: show,
      error: showError,
      isLoading: showLoading,
    } = useQuery({
      queryKey: ["show", showId],
      queryFn: () => fetchShowByShowId(showId),
      staleTime: 60000, // 데이터가 1분 동안 신선하다고 간주
    });

    // show 데이터가 준비된 후에만 tagsId를 가져옴
    const {
      data: tagsId,
      error: tagsIdError,
      isLoading: tagsIdLoading,
    } = useQuery({
      queryKey: ["tagsId", showId],
      queryFn: async () => {
        const tagsIdData = await Promise.all(
          show.map(async (item) => {
            const data = await fetchShowTagsId(item.id);
            return data;
          })
        );
        return tagsIdData;
      },
      enabled: !!show, // show가 로드된 후에만 실행
    });

  // tagsId 데이터가 준비된 후에만 tags를 가져옴
  const {
    data: tags,
    error: tagsError,
    isLoading: tagsLoading,
  } = useQuery({
    queryKey: ["tags", tagsId],
    queryFn: async () => {
      const tagData = await Promise.all(
        tagsId.flat().map(async ({ tag_id }) => {
          const data = await fetchTagName(tag_id);
          return data;
        })
      );
      return tagData;
    },
    enabled: !!tagsId, // tagsId가 로드된 후에만 실행
  });

  if (showLoading || tagsIdLoading || tagsLoading) return <div>Loading...</div>;
  if (showError || tagsIdError || tagsError) return <div>ERR</div>;

  return (
    <>
      <SubHeader />
      <TemplateBlock>
        <DetailViewer show={show} color={color} tags={tags} />
      </TemplateBlock>
      <Footer />
    </>
  );
};

export default React.memo(DetailTemplate);
