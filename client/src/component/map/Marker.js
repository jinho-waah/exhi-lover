import { useEffect, useState, useMemo } from "react";
import { fetchGalleryLocation } from "../../lib/api/Api";

function Marker() {
  const [galleries, setGalleries] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setError(null);
        setGalleries(await fetchGalleryLocation());
      } catch (e) {
        setError(e);
      }
    };
    fetchGallery();
  }, []);

  const positions = galleries
    ? galleries.map((gallery) => ({
        id: gallery.id,
        title: gallery.gallery_name,
        latlng: {
          lat: parseFloat(gallery.gallery_add_tude.split(",")[0]),
          lng: parseFloat(gallery.gallery_add_tude.split(",")[1]),
        },
        add: gallery.gallery_add_word,
        contact: gallery.gallery_phone_num,
        url: gallery.site,
        onDisplay: gallery.on_display,
      }))
    : [];

  return positions;
}

export default Marker;
