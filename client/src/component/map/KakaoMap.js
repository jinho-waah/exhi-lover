// /*global kakao*/
// import React, { useEffect, useRef, useState } from "react";
// import icon from "../../lib/icon/loc.png";
// import iconDark from "../../lib/icon/dot.png";
// import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";
// import FetchShowTags from "./FetchShowTags";

// function KakaoMap({ lat, lng, flag, galleriesMarker }) {
//   const mapHeight = (window.innerWidth >= 560 ? 560 : window.innerWidth) * 1.1;
//   const mapContainer = useRef(null);

//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false); // Add a state variable for drawer visibility
//   const [lastestClickedMarker, setLastestClickedMarker] = useState(null);

//   const imageSize = new window.kakao.maps.Size(35, 35);
//   const darkImageSize = new window.kakao.maps.Size(16, 16);
//   const galleryMarkerImage = new window.kakao.maps.MarkerImage(icon, imageSize);
//   const galleryMarkerImageDark = new window.kakao.maps.MarkerImage(
//     iconDark,
//     darkImageSize
//   );

//   const mapOptions = {
//     center: new window.kakao.maps.LatLng(lat, lng),
//     level: 6,
//   };

//   useEffect(() => {
//     const map = new window.kakao.maps.Map(mapContainer.current, mapOptions);

//     const storedLastClickedMarker = localStorage.getItem("lastClickedMarker");
//     const initialLastClickedMarker = storedLastClickedMarker
//       ? JSON.parse(storedLastClickedMarker)
//       : null;

//     setLastestClickedMarker(
//       initialLastClickedMarker
//         ? new window.kakao.maps.LatLng(
//             initialLastClickedMarker.lat,
//             initialLastClickedMarker.lng
//           )
//         : null
//     );

//     if (flag) {
//       const markerPosition = new window.kakao.maps.LatLng(lat, lng);
//       const marker = new window.kakao.maps.Marker({
//         map: map,
//         position: markerPosition,
//       });
//     }

//     if (lastestClickedMarker) {
//       map.panTo(lastestClickedMarker);
//     }

//     galleriesMarker.forEach((galleryMarker) => {
//       // console.log("1st", galleryMarker);
//       if (galleryMarker.onDisplay) {
//         const setGalleryMarker = new window.kakao.maps.Marker({
//           map: map,
//           position: new window.kakao.maps.LatLng(
//             galleryMarker.latlng.lat,
//             galleryMarker.latlng.lng
//           ),
//           image: galleryMarkerImage,
//           zIndex: 99,
//         });
//         // console.log("2nd", galleryMarker);

//         window.kakao.maps.event.addListener(setGalleryMarker, "click", () => {
//           map.panTo(setGalleryMarker.getPosition());
//           window.scrollTo({
//             top: document.body.scrollHeight,
//             behavior: "smooth", // Optional: This provides a smooth scroll animation
//           });

//           setSelectedMarker(galleryMarker);
//           setLastestClickedMarker(setGalleryMarker.getPosition());
//           localStorage.setItem(
//             "lastClickedMarker",
//             JSON.stringify({
//               lat: setGalleryMarker.getPosition().getLat(),
//               lng: setGalleryMarker.getPosition().getLng(),
//             })
//           );
//           setDrawerOpen(true);
//         });
//       } else {
//         const setGalleryMarker = new window.kakao.maps.Marker({
//           map: map,
//           position: new window.kakao.maps.LatLng(
//             galleryMarker.latlng.lat,
//             galleryMarker.latlng.lng
//           ),
//           image: galleryMarkerImageDark,
//         });

//         window.kakao.maps.event.addListener(
//           setGalleryMarker,
//           "click",
//           function () {
//             map.panTo(setGalleryMarker.getPosition());
//             window.scrollTo({
//               top: document.body.scrollHeight,
//               behavior: "smooth",
//             });
//             // console.log(setGalleryMarker);
//             setSelectedMarker(setGalleryMarker);
//             setLastestClickedMarker(setGalleryMarker.getPosition());
//             localStorage.setItem(
//               "lastClickedMarker",
//               JSON.stringify({
//                 lat: setGalleryMarker.getPosition().getLat(),
//                 lng: setGalleryMarker.getPosition().getLng(),
//               })
//             );
//             setDrawerOpen(true);
//           }
//         );
//       }
//     });
//   }, [flag, galleriesMarker]);

//   // console.log(selectedMarker);

//   return (
//     <div>
//       <div
//         style={{
//           width: `100%`,
//           maxWidth: "560px",
//           height: `${mapHeight + 50}px`,
//           position: "absolute",
//         }}
//       >
//         <div
//           id="map"
//           ref={mapContainer}
//           style={{
//             width: `auto`,
//             height: `${mapHeight + 50}px`,
//             // position: "absolute",
//           }}
//         />
//         {selectedMarker && drawerOpen ? (
//           <SwipeableEdgeDrawer
//             gallery={selectedMarker}
//             onClose={() => {
//               setDrawerOpen(false);
//             }}
//           />
//         ) : (
//           <SwipeableEdgeDrawer />
//         )}
//       </div>
//     </div>
//   );
// }

// export default KakaoMap;

/*global kakao*/
import React, { useEffect, useRef, useState } from "react";
import icon from "../../lib/icon/loc.png";
import iconDark from "../../lib/icon/dot.png";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";

function KakaoMap({ lat, lng, flag, galleriesMarker }) {
  const mapHeight = (window.innerWidth >= 560 ? 560 : window.innerWidth) * 1.1;
  const mapContainer = useRef(null);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lastestClickedMarker, setLastestClickedMarker] = useState(null);

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, {
      center: new kakao.maps.LatLng(lat, lng),
      level: 6,
    });

    const storedLastClickedMarker = localStorage.getItem("lastClickedMarker");
    const initialLastClickedMarker = storedLastClickedMarker
      ? JSON.parse(storedLastClickedMarker)
      : null;

    setLastestClickedMarker(
      initialLastClickedMarker
        ? new kakao.maps.LatLng(
            initialLastClickedMarker.lat,
            initialLastClickedMarker.lng
          )
        : null
    );

    if (flag) {
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      new kakao.maps.Marker({
        map: map,
        position: markerPosition,
      });
    }

    if (lastestClickedMarker) {
      map.panTo(lastestClickedMarker);
    }

    galleriesMarker.forEach((galleryMarker) => {
      const markerImage = galleryMarker.onDisplay
        ? new kakao.maps.MarkerImage(icon, new kakao.maps.Size(35, 35))
        : new kakao.maps.MarkerImage(iconDark, new kakao.maps.Size(16, 16));

      const setGalleryMarker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(
          galleryMarker.latlng.lat,
          galleryMarker.latlng.lng
        ),
        image: markerImage,
        zIndex: galleryMarker.onDisplay ? 99 : 1,
      });

      kakao.maps.event.addListener(setGalleryMarker, "click", () => {
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
      });
    });
  }, [flag, galleriesMarker]);

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
          ref={mapContainer}
          style={{ width: `auto`, height: `${mapHeight + 50}px` }}
        />
        {selectedMarker && drawerOpen ? (
          <SwipeableEdgeDrawer
            gallery={selectedMarker}
            onClose={() => setDrawerOpen(false)}
          />
        ) : (
          <SwipeableEdgeDrawer />
        )}
      </div>
    </div>
  );
}

export default KakaoMap;
