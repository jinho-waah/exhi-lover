function(){
  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
  const markerImageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png"

  const imageSize = { width: 22, height: 26 }
  const spriteSize = { width: 36, height: 98 }

  // 커피숍 마커가 표시될 좌표 배열입니다
  const coffeePositions = [
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
  ]
  const coffeeOrigin = { x: 10, y: 0 }

  const [selectedCategory, setSelectedCategory] = useState("coffee")

  return (
    <>
      <CategoryMarkerStyle />
      <div id="mapwrap">
        <Map // 지도를 표시할 Container
          id={`map`}
          center={{
            // 지도의 중심좌표
            lat: 37.498004414546934,
            lng: 127.02770621963765,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={3} // 지도의 확대 레벨
        >
            <MapMarker
            key={`coffee-${position.lat},${position.lng}`}
            position={position}
            image={{
                src: markerImageSrc,
                size: imageSize,
                options: {
                spriteSize: spriteSize,
                spriteOrigin: coffeeOrigin,
                },
            }}
            />
            
        </Map>
        {/* 지도 위에 표시될 마커 카테고리 */}
      </div>
    </>
  )
}