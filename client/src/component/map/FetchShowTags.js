import { useState, useEffect } from "react";
import { fetchShowTagsId, fetchTagName } from "../../lib/api/Api";

function FetchShowTags(galleriesInfo) {
  const [tagIdsList, setTagIdsList] = useState(null);
  const [tagsList, setTagsList] = useState(null);
  const [tagIdsError, setTagIdsError] = useState(null);
  const [tagsError, setTagsError] = useState(null);
  const [showIds, setShowIds] = useState(null);

  useEffect(() => {
    if (galleriesInfo !== null) {
      setShowIds(
        galleriesInfo.map((galleryInfo) => {
          return galleryInfo.id;
        })
      );
    }
  }, [galleriesInfo]);

  useEffect(() => {
    const getTagsIdsList = async () => {
      try {
        const tagsMap = {};
        await Promise.all(
          showIds.map(async (showId) => {
            const tags = await fetchShowTagsId(showId);
            const tagIds = tags.map((tag) => tag.tag_id);
            tagsMap[showId] = tagIds;
          })
        );
        setTagIdsList(tagsMap);
      } catch (e) {
        setTagIdsError(e);
      }
    };
    if (showIds !== null) {
      getTagsIdsList();
    }
  }, [showIds]);

  useEffect(() => {
    const getTagsList = async () => {
      try {
        if (tagIdsList !== null) {
          const tagNamesMap = {};
          for (const showId in tagIdsList) {
            const tagIds = tagIdsList[showId];
            const tagNames = await Promise.all(
              tagIds.map(async (tagId) => {
                const tagName = await fetchTagName(tagId);
                return tagName;
              })
            );
            tagNamesMap[showId] = tagNames;
          }
          setTagsList(tagNamesMap);
        }
      } catch (e) {
        setTagsError(e);
      }
    };
    getTagsList();
  }, [tagIdsList]);
  return tagsList;
}

export default FetchShowTags;
