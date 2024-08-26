import * as React from "react";
import styled from "styled-components";
import Post from "./Post";
import colorSet from "../../lib/styles/colorSet";
import { useEffect, useState, memo } from "react";
import { Pagination } from "@mui/material";
import { fetchShowTagsId, fetchTagName } from "../../lib/api/Api";

const TemplateBlock = styled.div`
  padding-top: 2px;
  box-sizing: border-box;
  align-items: center;
  flex-flow: row wrap;
  justify-content: center; /* Center content horizontally */
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
      color: white; // Change text color
      border-color: white; // Change border color
      &.Mui-selected {
        background-color: #333; // Change background color for selected page
      }
      &:hover {
        background-color: #555; // Change background color on hover
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
  const [tags, setTags] = useState(null);
  const [tagsId, setTagsId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event, newPage) => {
    setPaginationValue(newPage); // Update the paginationValue state with the new page number
  };
  const handleScroll = () => {
    console.log("hi");
  };

  useEffect(() => {
    const fetchTagsId = async () => {
      try {
        setError(null);
        const tagsIdData = await Promise.all(
          shows.map(async (show) => {
            const data = await fetchShowTagsId(show.id);
            return data;
          })
        );
        if (tagsIdData.length > 0) {
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
          setTagsId(tagsIdArray);
        }
      } catch (e) {
        setError(e);
      }
    };

    fetchTagsId();
  }, [shows]);

  useEffect(() => {
    const fetchTag = async () => {
      try {
        setError(null);
        const tagData = await Promise.all(
          tagsId.map(async ({ exhibition_id, tags }) => {
            const tagNames = await Promise.all(
              tags.map(async (tagId) => {
                const data = await fetchTagName(tagId);
                return data;
              })
            );
            return { exhibition_id, tagNames };
          })
        );

        setTags(
          tagData.reduce((acc, { exhibition_id, tagNames }) => {
            acc[exhibition_id] = tagNames;
            return acc;
          }, {})
        );
      } catch (e) {
        setError(e);
      }
    };

    if (tagsId !== null) {
      fetchTag();
    }
  }, [tagsId]);

  return (
    <>
      <TemplateBlock>
        {shows.map((show, index) => {
          const key = `${show.show_name}`; // create unique key prop value
          const colorIndex = index % colorSet.length; // determine color index based on position in array
          const color = colorSet[colorIndex]; // get color from colorSet array
          return (
            <Post show={show} key={key} color={color} tags={tags?.[show.id]} />
          ); // pass color as prop to Post component
        })}
        <PaginationBlock>
          <StyledPagination
            count={pageCount}
            page={paginationValue}
            onChange={handleChange}
          />
        </PaginationBlock>
      </TemplateBlock>
    </>
  );
};

export default memo(PostTemplate);
