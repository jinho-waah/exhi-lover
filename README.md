<h1 align='center'><b>Art-Lover</b></h1>

## **1. Art-lover 소개**

![스크린샷 2024-09-16 오후 6 21 25](https://github.com/user-attachments/assets/717a97f0-dc62-49ec-9b1d-cd105cbee2c3)

> Exhi-lover는 전시회를 손쉽게 검색 할 수 있는 입니다.<br/>
> Frontend by 조진호
> Backend by 조진호
> Designed by 조진호
[Art-Lover URL](https://art-lover.co.kr)<br/>
                                                               
## **2. 개발 환경 & 핵심 기술 설명**

### **개발 환경**

<table>
<tr>
 <td align="center">Front-End</td>
 <td>
   <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>&nbsp
  <img src="https://img.shields.io/badge/styled--Components-db7093?style=for-the-badge&logo=styled-Components&logoColor=black"/>&nbsp 
  <img src="https://img.shields.io/badge/Axios-white?style=for-the-badge&logo=Axios&logoColor=black"/>&nbsp 
  <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=black"/>&nbsp 
   <img src="https://img.shields.io/badge/Zustand-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>&nbsp 
	 
 </td>
</tr>
<tr>
 <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
<tr>
 <td align="center">배포</td>
 <td>
	 <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>&nbsp
</tr>
</table>

### **핵심 기술 사용 이유**

|     **기술**      |                                                   **설명**                                                    |
| :---------------: | :-----------------------------------------------------------------------------------------------------------: |
|       REACT       | Vue.js의 템플릿 구문 보다는 React의 JSX가 더 유연하게 컴포넌트를 작성 할 수 있기에 React를 채택|
|       Axios       | HTTP 요청을 보다 간편하게 처리하기 위해 사용 |
| Styled-components |    props나 상태에 따라 동적으로 스타일을 변경할 수 있기에 사용      |
|  Tanstack Query | 서버 데이터의 상태를 효율적으로 관리하고, 캐시와 자동 리페칭으로 사용자 경험을 개선하기 위해 사용  |
| Zustand  | 클라이언트가 주력으로 이용할 state가 많지 않아 효율적으로 관리할 수 있는 zustand 채택 |
| Kakao map api  | 사용자 편의성과 로딩시간, 검색시간이 중요하다고 판단하여  kakao map api 를 사용  |




## **3. EXHI-LOVER 프로젝트 구조**

```
EXHI_LOVER
├─ .github
|  
├- 📂client
|      ├──── 📂build
|      |        ├─ 📂 static
|      |        └─ 📂 upload
|      |
|      ├─── 📂 node_modules
|      ├─── 📂 public
|      |          ├─ 📂 favicon
|      |          ├─ 📂 upload
|      |          ├─ favicon.ico
|      |          └─ index.html
|      |
|      ├─── 📂 component
|      |           ├─ 📂 button
|      |           |       ├─ MainButton.js
|      |           |       └─ SearchBar.js
|      |           ├─ 📂 calendar
|      |           |         ├─ Calendar.css
|      |           |         └─ MyCalendar.js
|      |           ├─ 📂 detail
|      |           |       ├─ DetailTemplate.js
|      |           |       └─ DetailViewer.js
|      |           ├─ 📂 hashtag
|      |           |       ├─ HashTag.js
|      |           |       ├─ HashTagTemplate.js
|      |           |       ├─ IdToShow.js
|      |           |       ├─ Tags.js
|      |           |       └─ TagCheckBox.js
|      |           ├─ 📂 layout
|      |           |       ├─ Footer.js
|      |           |       ├─ HorizontalLine.js
|      |           |       ├─ MainHeader.js
|      |           |       └─ SubHeader.js
|      |           ├─ 📂 map
|      |           |      ├─ FetchShowInfo.js
|      |           |      ├─ FetchShowTags.js
|      |           |      ├─ KaKaoMap.js
|      |           |      ├─ MapTemplate.js
|      |           |      ├─ Marker.js
|      |           |      ├─ MiniMap.js
|      |           |      └─ SwipeableEdgeDrawere.js
|      |           ├─ 📂 post
|      |           |       ├─ Post.js
|      |           |       ├─ PostSkeleton.js
|      |           |       └─ PostTemplate.js
|      |           └─ 📂 search   
|      |                   └─ Search.js
|      ├─── 📂 lib     
|      |        ├─ 📂 api
|      |        |   └─ api.js
|      |        ├─ 📂 icon
|      |        ├─ 📂 logo
|      |        ├─ 📂 styles
|      |        |       ├─ colorSet.js
|      |        |       ├─ fontStyle.js
|      |        |       └─ palette.js
|      |        └─ 📂 zustand
|      |                └─ bearsStore.js
|      └─── 📂 pages
|                ├─ DetailPage.js
|                └─ MainPage.js
├- App.css
├- App.js
├- index.css
├- reportWebVitals.js
├- setupTest.js
└─ 📂 server
	 ├─── 📂 node_modules
	 └─── server.js
	   
```

## **4. 핵심 코드**

<details><summary><b>해시태그를 선택하면 해당 관련 게시물만 뜨게 되면 해당 게시물에 해당하지 않는 해시 태그는 비활성화</b></summary>

- 미디어 아트 선택하기 전<br/>
![스크린샷 2024-09-16 오후 6 25 39](https://github.com/user-attachments/assets/1785fe59-99bc-4a08-ad8b-7c0bad4475b7)

- 미디어 아트 선택 한 후<br/>
![스크린샷 2024-09-16 오후 6 25 57](https://github.com/user-attachments/assets/68f238ce-0d32-4df3-8b81-1f28fca30352)

```JSX

  const TagsCheckBox = ({ title, items, handleCheckedItems, tags }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [disableTagIds, setDisableTagIds] = useState([]);
  const [error, setError] = useState(null);

  const objectKeys = Object.keys(items); // string, object의 앞
  const valueKeys = Object.values(items); // int, object의 뒤

  useEffect(() => {
    handleCheckedItems(checkedItems);
  }, [handleCheckedItems, checkedItems]);

  useEffect(() => {
    const fetchTagId = async () => {
      try {
        if (tags !== null) {
          setError(null);
          const TagIds = tags.map((obj) => obj.tag_id);
          const filteredDisableTagIds = valueKeys.filter(
            (element) => !TagIds.includes(element)
          );
          setDisableTagIds(filteredDisableTagIds);
        }
      } catch (e) {
        setError(e);
      }
    };

    fetchTagId();
  }, [tags]);

  const handleItemClick = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems((val) => val.filter((text) => text !== index));
    } else {
      setCheckedItems((val) => [...val, index]);
    }
  };

  const handleReset = () => {
    setCheckedItems([]);
  };

  return (
    <Box>
      <p>
        {title}
        <button onClick={handleReset}>선택 초기화</button>
      </p>
      <br />
      <Container>
        {objectKeys.map((item) => (
          <Item
            key={items[item]}
            checked={checkedItems.includes(items[item])}
            onClick={() => handleItemClick(items[item])}
            disable={disableTagIds.includes(items[item])}
          >
            {checkedItems.includes(item) && <Done />}
            {item}
          </Item>
        ))}
      </Container>
    </Box>
  );
};

```

</details>

<details><summary><b>Kakao map api 전시관 marker 표시</b></summary>
<br/>

![스크린샷 2024-09-16 오후 6 54 00](https://github.com/user-attachments/assets/6469000f-c9cf-418b-b0b6-1ac080a14cc8)

- Marker 표시 

```jsx
//MapTemplate.js
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
    if (!state.isLoading && !markersLoading) {
      setFlag(true); // 모든 로딩이 완료되었을 때 flag를 true로 설정
    }
  }, [state.isLoading, markersLoading]);
  if (!flag) {
    return (
      <>
        <div>loading...</div>
      </>
    );
  }
```

```jsx
//Marker.js
import { useQuery } from "@tanstack/react-query";
import { fetchGalleryLocation } from "../../lib/api/Api";

function Marker() {
  const {
    data: galleries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["galleries"],
    queryFn: fetchGalleryLocation,
  });

  const positions = galleries
    ? galleries.map((gallery) => ({
        id: gallery.id,
        title: gallery.gallery_name,
        latlng: {
          lat: parseFloat(gallery.gallery_add_tude.split(",")[1]),
          lng: parseFloat(gallery.gallery_add_tude.split(",")[0]),
        },
        add: gallery.gallery_add_word,
        contact: gallery.gallery_phone_num,
        url: gallery.site,
        onDisplay: gallery.on_display,
      }))
    : [];

  return { positions, isLoading, error }; // positions, 로딩 상태, 에러 반환
}

export default Marker;

```

</details>

<details><summary><b>Zustand localStorage 저장</b></summary>
<br/>
![스크린샷 2024-09-16 오후 6 59 49](https://github.com/user-attachments/assets/bd4c1fc7-3433-4e9c-b4b1-ec7f1307df6d)

- 필요한 정보만 localstorage에 저장

```jsx
//bearsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBearsStore = create(
  persist(
    (set) => ({
      menuValue: "0",
      setMenuValue: (value) => set({ menuValue: value }),
      buttonValue: 0,
      setButtonValue: (value) => set({ buttonValue: value }),
      lastClickedMarker: {
        lat: 0,
        lng: 0,
      },
      setLastClickedMarker: (lat, lng) =>
        set({ lastClickedMarker: { lat, lng } }),
    }),
    {
      name: "bears-storage",
      partialize: (state) => ({
        menuValue: state.menuValue,
        buttonValue: state.buttonValue,
      }),
    }
  )
);

export default useBearsStore;

```

</details>

## **5. 트러블 슈팅**

<b style="font-size:17px">문제</b><br/>

Browser에서 Refresh를 하면 선택한 검색 방식이 default로 돌아오는 문제 발생 

<b style="font-size:17px">해결</b><br/>

(해결 과정 중 발생한 문제) 
- Zustand로 상태 관리 하고 persist의 getStorage를 활용<br/>
- localStorage에 원하지 않는 정보도 저장 되는 문제 발생<br/>

(해결)
- partialize를 이용하여 원하는 state만 저장 <br/>


<br/>




</details>
