/*global kakao*/
import React, { useEffect } from "react";

function Map({ state }) {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(state.lat, state.lng),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(state.lat, state.lng);
    if (state !== { lat: 37.56649, lng: 126.978488 }) {
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
    }
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "21rem" }}></div>
    </div>
  );
}

export default Map;
