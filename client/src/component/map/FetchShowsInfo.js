import { useState, useEffect } from "react";
import { fetchShowsByGalleryId } from "../../lib/api/Api";

function FetchShowsInfo(id) {
  const [shows, setShows] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchShows = async () => {
      try {
        setError(null);
        setShows(await fetchShowsByGalleryId(id));
      } catch (e) {
        setError(e);
      }
    };
    fetchShows();
  }, [id]);
  return shows;
}

export default FetchShowsInfo;
