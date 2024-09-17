/*global kakao*/
import React, { useEffect, useMemo, useRef, useState } from "react";
import icon from "../../lib/icon/loc.png";
import iconDark from "../../lib/icon/dot.png";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";
import FetchShowTags from "./FetchShowTags";
import useBearsStore from "../../lib/zustand/bearsStore";

function KakaoMap({ lat, lng, flag, galleriesMarker }) {
  const mapHeight = (window.innerWidth >= 560 ? 560 : window.innerWidth) * 1.1;
  const mapContainer = useRef(document.getElementById("map"));

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Add a state variable for drawer visibility

  const { lastClickedMarker, setLastClickedMarker } = useBearsStore();

  const imageSize = new window.kakao.maps.Size(35, 35);
  const darkImageSize = new window.kakao.maps.Size(16, 16);
  const galleryMarkerImage = new window.kakao.maps.MarkerImage(icon, imageSize);
  const galleryMarkerImageDark = new window.kakao.maps.MarkerImage(
    iconDark,
    darkImageSize
  );

  const mapOptions = {
    center: new window.kakao.maps.LatLng(lat, lng),
    level: 6,
  };

  useEffect(() => {
    const map = new window.kakao.maps.Map(mapContainer.current, mapOptions);

    if (lastClickedMarker.lat !== 0 && lastClickedMarker.lng !== 0) {
      map.panTo(
        new window.kakao.maps.LatLng(
          lastClickedMarker.lat,
          lastClickedMarker.lng
        )
      );
    } else {
      // 첫 접속 시 사용자의 현재 위치로 이동
      if (flag) {
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: markerPosition,
        });
      }
    }

    // 내위치 알려주는 마커.
    if (flag) {
      const markerPosition = new window.kakao.maps.LatLng(lat, lng);
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: markerPosition,
      });
    }

    galleriesMarker.forEach((galleryMarker) => {
      if (galleryMarker.onDisplay) {
        const setGalleryMarker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(
            galleryMarker.latlng.lat,
            galleryMarker.latlng.lng
          ),
          image: galleryMarkerImage,
          zIndex: 99,
        });

        window.kakao.maps.event.addListener(setGalleryMarker, "click", () => {
          map.panTo(setGalleryMarker.getPosition());
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth", // Optional: This provides a smooth scroll animation
          });

          setSelectedMarker(galleryMarker);
          setLastClickedMarker(
            setGalleryMarker.getPosition().getLat(),
            setGalleryMarker.getPosition().getLng()
          );
          setDrawerOpen(true);
        });
      } else {
        const setGalleryMarker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(
            galleryMarker.latlng.lat,
            galleryMarker.latlng.lng
          ),
          image: galleryMarkerImageDark,
        });
        window.kakao.maps.event.addListener(
          setGalleryMarker,
          "click",
          function () {
            map.panTo(setGalleryMarker.getPosition());
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
            setSelectedMarker(galleryMarker);
            setLastClickedMarker(
              setGalleryMarker.getPosition().getLat(),
              setGalleryMarker.getPosition().getLng()
            );
            setDrawerOpen(true);
          }
        );
      }
    });
  }, [galleriesMarker]);

  return (
    <div>
      <div
        style={{
          width: `100%`,
          maxWidth: "560px",
          height: `${mapHeight + 50}px`,
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <div
          id="map"
          ref={mapContainer}
          style={{
            width: `auto`,
            height: `${mapHeight + 50}px`,
            // position: "absolute",
          }}
        />
        {selectedMarker && drawerOpen ? (
          <SwipeableEdgeDrawer
            gallery={selectedMarker}
            onClose={() => {
              setDrawerOpen(false);
            }}
            drawerOpen={drawerOpen}
          />
        ) : (
          <SwipeableEdgeDrawer />
        )}
      </div>
    </div>
  );
}

export default KakaoMap;
