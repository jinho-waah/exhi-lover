/*global kakao*/
import React, { useEffect, useState } from "react";
import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";

function MiniMap({ name, lat, lng }) {
  return (
    <StaticMap
      center={{ lat: lat, lng: lng }}
      style={{ width: "100%", height: "21rem" }}
      level={4}
      marker={[
        {
          position: {
            lat: lat,
            lng: lng,
          },
          text: name, // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
        },
      ]}
    ></StaticMap>
  );
}

export default React.memo(MiniMap);
