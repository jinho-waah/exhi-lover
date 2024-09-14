import { useQuery } from "@tanstack/react-query";
import { fetchGalleryLocation } from "../../lib/api/Api";

function Marker() {
  const {
    data: galleries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["galleries"],
    queryFn: fetchGalleryLocation,
  });

  const positions = galleries
    ? galleries.map((gallery) => ({
        id: gallery.id,
        title: gallery.gallery_name,
        latlng: {
          lat: parseFloat(gallery.gallery_add_tude.split(",")[1]),
          lng: parseFloat(gallery.gallery_add_tude.split(",")[0]),
        },
        add: gallery.gallery_add_word,
        contact: gallery.gallery_phone_num,
        url: gallery.site,
        onDisplay: gallery.on_display,
      }))
    : [];

  return { positions, isLoading, error }; // positions, 로딩 상태, 에러 반환
}

export default Marker;
