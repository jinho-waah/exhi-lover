/*global kakao*/
import React, { useEffect, useRef, useState } from "react";
import icon from "../../lib/icon/loc.png";
import iconDark from "../../lib/icon/dot.png";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";
import FetchShowTags from "./FetchShowTags";

function KakaoMap({ lat, lng, showMarker, galleriesMarker }) {
  const mapHeight = (window.innerWidth >= 560 ? 560 : window.innerWidth) * 1.1;
  const mapContainer = useRef(null);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Add a state variable for drawer visibility
  const [lastestClickedMarker, setLastestClickedMarker] = useState(null);

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

    const storedLastClickedMarker = localStorage.getItem("lastClickedMarker");
    const initialLastClickedMarker = storedLastClickedMarker
      ? JSON.parse(storedLastClickedMarker)
      : null;

    setLastestClickedMarker(
      initialLastClickedMarker
        ? new window.kakao.maps.LatLng(
            initialLastClickedMarker.lat,
            initialLastClickedMarker.lng
          )
        : null
    );

    if (showMarker) {
      const markerPosition = new window.kakao.maps.LatLng(lat, lng);
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: markerPosition,
      });
    }

    if (lastestClickedMarker) {
      map.panTo(lastestClickedMarker);
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

        window.kakao.maps.event.addListener(
          setGalleryMarker,
          "click",
          function () {
            map.panTo(setGalleryMarker.getPosition());
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth", // Optional: This provides a smooth scroll animation
            });
            setSelectedMarker(galleryMarker);
            setLastestClickedMarker(setGalleryMarker.getPosition());
            localStorage.setItem(
              "lastClickedMarker",
              JSON.stringify({
                lat: setGalleryMarker.getPosition().getLat(),
                lng: setGalleryMarker.getPosition().getLng(),
              })
            );
            setDrawerOpen(true);
          }
        );
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
            setLastestClickedMarker(setGalleryMarker.getPosition());
            localStorage.setItem(
              "lastClickedMarker",
              JSON.stringify({
                lat: setGalleryMarker.getPosition().getLat(),
                lng: setGalleryMarker.getPosition().getLng(),
              })
            );
            setDrawerOpen(true);
          }
        );
      }
    });
  }, [showMarker, galleriesMarker]);

  return (
    <div>
      <div
        style={{
          width: `100%`,
          maxWidth: "560px",
          height: `${mapHeight + 50}px`,
          position: "absolute",
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
          />
        ) : (
          <SwipeableEdgeDrawer />
        )}
      </div>
    </div>
  );
}

export default KakaoMap;
