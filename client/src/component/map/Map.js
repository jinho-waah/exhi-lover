/*global kakao*/
import React, { useEffect } from "react";

function Map({ state, flag }) {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(state.lat, state.lng),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(state.lat, state.lng);

    if (flag === true) {
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [state, flag]);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "120vw" }}></div>
    </div>
  );
}

export default Map;
