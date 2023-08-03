/*global kakao*/
import React, { useEffect, useState } from "react";
import Marker from "./Marker";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import icon from "../../lib/icon/loc7.png";

function KakaoMap({ state, flag }) {
  const mapHeight = window.innerWidth >= 560 ? 560 : window.innerWidth;
  const center = state;
  const test = Marker();
  console.log(typeof test, test);
  const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];
  // useEffect(() => {
  //   setCenter(state);
  // }, [state]);
  // const [center, setCenter] = useState({ lat: 36.5, lng: 127.8 });
  // setCenter(new kakao.maps.LatLng(state.lat, state.lng));
  // useEffect(() => {
  //   // setCenter(new kakao.maps.LatLng(state.lat, state.lng));

  //   var container = document.getElementById("map");
  //   var options = {
  //     center: new kakao.maps.LatLng(state.lat, state.lng),
  //     level: 3,
  //   };

  //   var map = new kakao.maps.Map(container, options);
  //   var markerPosition = new kakao.maps.LatLng(state.lat, state.lng);

  //   if (flag === true) {
  //     var marker = new kakao.maps.Marker({
  //       position: markerPosition,
  //     });
  //     marker.setMap(map);
  //   }
  // }, [state, flag]);

  return (
    <div>
      <Map // 지도를 표시할 Container
        center={center}
        style={{
          // 지도의 크기
          width: "100%",
          height: `${mapHeight}px`,
        }}
        level={3} // 지도의 확대 레벨
      >
        {flag && <MapMarker position={center} />}
        {test.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: icon,
              size: {
                width: 33,
                height: 33,
              }, // 마커이미지의 크기입니다
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
      </Map>
    </div>
  );
}

export default React.memo(KakaoMap);
