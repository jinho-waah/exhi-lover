import { useQuery } from "@tanstack/react-query";
import { fetchShowTagsId, fetchTagName } from "../../lib/api/Api";

function FetchShowTags(galleriesInfo) {
  const showIds = galleriesInfo
    ? galleriesInfo.map((galleryInfo) => galleryInfo.id)
    : [];

  // 각 전시회에 대해 태그 ID를 가져오는 쿼리
  const {
    data: tagIdsList,
    error: tagIdsError,
    isLoading: tagIdsLoading,
  } = useQuery({
    queryKey: ["showTags", showIds],
    queryFn: async () => {
      const tagsMap = {};
      await Promise.all(
        showIds.map(async (showId) => {
          const tags = await fetchShowTagsId(showId);
          const tagIds = tags.map((tag) => tag.tag_id);
          tagsMap[showId] = tagIds;
        })
      );
      return tagsMap;
    },
    enabled: showIds.length > 0, // showIds가 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 fresh 상태로 유지
  });

  // 각 전시회에 대한 태그 이름을 가져오는 쿼리
  const {
    data: tagsList,
    error: tagsError,
    isLoading: tagsLoading,
  } = useQuery({
    queryKey: ["tagNames", tagIdsList],
    queryFn: async () => {
      if (!tagIdsList) return null;
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
      return tagNamesMap;
    },
    enabled: !!tagIdsList, // tagIdsList가 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 fresh 상태로 유지
  });

  if (tagIdsLoading || tagsLoading) {
    return <div>Loading...</div>;
  }

  if (tagIdsError || tagsError) {
    return (
      <div>Error occurred: {tagIdsError?.message || tagsError?.message}</div>
    );
  }

  return tagsList;
}

export default FetchShowTags;
