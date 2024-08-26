import { useState, useEffect } from "react";
import axios from "axios";
import {
  fetchAllShows,
  fetchShowByShowId,
  fetchShowIdByTagId,
  fetchTagsIdbyShowId,
} from "../../lib/api/Api";

function IdToShow({ TagItems, selectedValue }) {
  const [shows, setShows] = useState(null);
  const [tags, setTags] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tagIdString = TagItems.join("&");
    const fetchShows = async () => {
      if (tagIdString !== "") {
        try {
          setError(null);
          const showsIds = await fetchShowIdByTagId(tagIdString);
          const tagsId = await fetchTagsIdbyShowId(showsIds);
          setTags(tagsId);
          const getShowResponse = await fetchShowByShowId(showsIds);
          setShows(getShowResponse);
        } catch (e) {
          setError(e);
        }
      } else {
        const show = await fetchAllShows();
        const showsIds = show.map((show) => show.id).join("&");
        const tagsId = await fetchTagsIdbyShowId(showsIds);
        setShows(show);
        setTags(tagsId);
      }
    };

    fetchShows();
  }, [TagItems]);

  return { shows, tags };
}

export default IdToShow;
