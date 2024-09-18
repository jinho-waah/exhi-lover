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

  if (isLoading) {
    return { positions: [], isLoading: true, error: null }; // 로딩 중 상태 반환
  }

  if (error) {
    return { positions: [], isLoading: false, error }; // 에러 상태 반환
  }

  const positions = galleries.map((gallery) => {
    const [lng, lat] = gallery.gallery_add_tude.split(",").map(parseFloat); // lat, lng 분리 및 파싱
    return {
      id: gallery.id,
      title: gallery.gallery_name,
      latlng: { lat, lng },
      add: gallery.gallery_add_word,
      contact: gallery.gallery_phone_num,
      url: gallery.site,
      onDisplay: gallery.on_display,
    };
  });

  return { positions, isLoading: false, error: null }; // 가공된 데이터 반환
}

export default Marker;
