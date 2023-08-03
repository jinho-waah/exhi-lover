import { useEffect, useState } from "react";
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

  // Convert galleries to the desired format
  const positions = galleries
    ? galleries.map((gallery) => ({
        title: gallery.gallery_name,
        latlng: {
          lat: parseFloat(gallery.gallery_add_tude.split(",")[0]),
          lng: parseFloat(gallery.gallery_add_tude.split(",")[1]),
        },
      }))
    : [];

  return positions;
}

export default Marker;
