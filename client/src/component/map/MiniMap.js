/*global kakao*/
import React, { useEffect, useRef } from "react";

function MiniMap({ name, lat, lng }) {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOptions);

    const markerPosition = new window.kakao.maps.LatLng(lat, lng);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, [lat, lng, name]);

  return <div id="map" style={{ width: "100%", height: "350px" }}></div>;
}

export default React.memo(MiniMap);
