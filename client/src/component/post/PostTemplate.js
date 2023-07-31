import styled from "styled-components";
import Post from "./Post";
import colorSet from "../../lib/styles/colorSet";
import { useEffect, useState, memo } from "react";
import axios from "axios";
import { fetchShowTagsId, fetchTagName } from "../../lib/api/Api";

const TemplateBlock = styled.div`
  padding-top: 0.2rem;
  box-sizing: border-box;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

const PostTemplate = ({ shows }) => {
  const [tags, setTags] = useState(null);
  const [tagsId, setTagsId] = useState(null);
  const [error, setError] = useState(null);

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
                const name = await fetchTagName(tagId);
                return name;
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
      </TemplateBlock>
    </>
  );
};

export default memo(PostTemplate);
