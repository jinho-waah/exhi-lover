import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import KakaoMap from "./KaKaoMap";
import Marker from "./Marker";
import { Box, Skeleton, Typography } from "@mui/material";

// 깜박이는 애니메이션 정의
const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedTypography = styled(Typography)`
  animation: ${blinkAnimation} 1.5s infinite ease-in-out;
`;

const MapBox = styled.div`
  width: 100%;
  align-items: center;
  margin: 0;

  @media (max-width: 560px) {
    height: calc(110vw + 50px);
  }

  @media (min-width: 561px) {
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

  const { positions, isLoading: markersLoading } = Marker(); // Marker에서 로딩 상태와 positions을 받음

  const [flag, setFlag] = useState(false); // true -> marker 활성화 (위치 활성화를 하지 않으면 no marker)

  useEffect(() => {
    if (navigator.geolocation) {
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
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (!state.isLoading && !markersLoading) {
      setFlag(true); // 모든 로딩이 완료되었을 때 flag를 true로 설정
    }
  }, [state.isLoading, markersLoading]);

  return (
    <MapBox>
      {flag ? (
        <KakaoMap
          lat={state.center.lat}
          lng={state.center.lng}
          flag={flag} // showMarker에 flag 값 전달
          galleriesMarker={positions} // 갤러리 마커 데이터 전달
        />
      ) : (
        <Box
          sx={{
            bgcolor: "#121212",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            height:
              (window.innerWidth >= 560 ? 560 : window.innerWidth * 1.1) + 50,
          }}
        >
          <Skeleton
            sx={{
              bgcolor: "grey.900",
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
            }}
            variant="rectangular"
          />
          <AnimatedTypography
            sx={{
              position: "absolute",
              color: "white",
              fontSize: "20px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            지도 생성중...!
          </AnimatedTypography>
        </Box>
      )}
    </MapBox>
  );
};

export default MapTemplate;
