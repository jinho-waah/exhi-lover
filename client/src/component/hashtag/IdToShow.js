// import { useState, useEffect } from "react";
// import {
//   fetchAllShows,
//   fetchShowByShowId,
//   fetchShowIdByTagId,
//   fetchTagsIdbyShowId,
// } from "../../lib/api/Api";

// function IdToShow({ TagItems }) {
//   const [shows, setShows] = useState(null);
//   const [tags, setTags] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const tagIdString = TagItems.join("&");
//     const fetchShows = async () => {
//       if (tagIdString !== "") {
//         try {
//           setError(null);
//           const showsIds = await fetchShowIdByTagId(tagIdString);
//           const tagsId = await fetchTagsIdbyShowId(showsIds);
//           setTags(tagsId);
//           const getShowResponse = await fetchShowByShowId(showsIds);
//           setShows(getShowResponse);
//         } catch (e) {
//           setError(e);
//         }
//       } else {
//         const show = await fetchAllShows();
//         const showsIds = show.map((show) => show.id).join("&");
//         const tagsId = await fetchTagsIdbyShowId(showsIds);
//         setShows(show);
//         setTags(tagsId);
//       }
//     };

//     fetchShows();
//   }, [TagItems]);

//   return { shows, tags };
// }

// export default IdToShow;

import { useQuery } from "@tanstack/react-query";
import {
  fetchAllShows,
  fetchShowByShowId,
  fetchShowIdByTagId,
  fetchTagsIdbyShowId,
} from "../../lib/api/Api";

function IdToShow({ TagItems, selectedValue }) {
  const tagIdString = TagItems.join("&");

  // 태그 기반으로 쇼 ID를 가져오는 쿼리
  const { data: showsIds, error: showIdError } = useQuery({
    queryKey: ["showsByTag", tagIdString],
    queryFn: () => fetchShowIdByTagId(tagIdString),
    enabled: tagIdString !== "", // tagIdString이 빈 값이 아닐 때만 실행
  });

  // 쇼 ID로 태그 ID를 가져오는 쿼리
  const { data: tags, error: tagError } = useQuery({
    queryKey: ["tagsByShow", showsIds],
    queryFn: () => fetchTagsIdbyShowId(showsIds),
    enabled: !!showsIds, // showsIds가 있을 때만 실행
  });

  // 쇼 ID로 쇼 정보를 가져오는 쿼리
  const { data: shows, error: showError } = useQuery({
    queryKey: ["shows", showsIds],
    queryFn: () => fetchShowByShowId(showsIds),
    enabled: !!showsIds, // showsIds가 있을 때만 실행
  });

  // 태그가 없을 때 전체 쇼를 가져오는 쿼리
  const { data: allShows, error: allShowsError } = useQuery({
    queryKey: ["allShows"],
    queryFn: fetchAllShows,
    enabled: tagIdString === "", // tagIdString이 빈 값일 때만 실행
  });

  // 태그가 없을 때 전체 쇼의 태그 ID를 가져옴
  const { data: allShowsTags, error: allShowsTagsError } = useQuery({
    queryKey: ["allTagsByShow"],
    queryFn: () =>
      fetchTagsIdbyShowId(allShows?.map((show) => show.id).join("&")),
    enabled: !!allShows, // 전체 쇼가 있을 때만 실행
  });

  if (
    showIdError ||
    tagError ||
    showError ||
    allShowsError ||
    allShowsTagsError
  ) {
    return <div>Error occurred</div>;
  }

  if (!shows && !allShows) {
    return <div>Loading...</div>;
  }

  return {
    shows: shows || allShows,
    tags: tags || allShowsTags,
  };
}

export default IdToShow;
