import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailViewer from "./DetailViewer";
import SubHeader from "../header/SubHeader";
import Footer from "../common/Footer";
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
  const [show, setShow] = useState(null);
  const [tags, setTags] = useState(null);
  const [tagsId, setTagsId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        setError(null);
        setShow(null);
        const data = await fetchShowByShowId(showId);
        setShow(data);
      } catch (e) {
        setError(e);
      }
    };
    fetchShow();
  }, [showId]);

  useEffect(() => {
    const fetchTagsId = async () => {
      try {
        setError(null);
        const tagsIdData = await Promise.all(
          show.map(async (show) => {
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
  }, [show]);

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

  if (error) return <div>ERR</div>;
  if (!show) return null;
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
