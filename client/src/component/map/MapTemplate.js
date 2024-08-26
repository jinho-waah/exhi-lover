import React from "react";
import styled from "styled-components";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import KakaoMap from "./KaKaoMap";
import Marker from "./Marker";

const MapBox = styled.div`
  width: 100%;
  align-items: center;
  margin: 0;

  @media (max-width: 560px) {
    height: calc(110vw + 50px);
  }

  @media (min-width: 561px) {
    // height: 616px;
    height: 666px;
  }
`;

const MapTemplate = () => {
  const [state, setState] = useState({
    center: {
      lat: 37.56649,
      lng: 126.978488,
    },
    errMsg: null,
    isLoading: true,
  });
  const positions = Marker();

  const [flag, setFlag] = useState(false); // true -> marker 활성화 (위치 활성화를 하지 않으면 no marker)

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (!state.isLoading) {
      setFlag(true);
    }
  }, [state.isLoading]);

  return (
    <MapBox>
      <KakaoMap
        lat={state.center.lat}
        lng={state.center.lng}
        showMarker={flag}
        galleriesMarker={positions}
      />
    </MapBox>
  );
};

export default MapTemplate;
