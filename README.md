<h1 align='center'><b>Art-Lover</b></h1>

## **1. Art-lover 소개**

![스크린샷 2024-09-16 오후 6 21 25](https://github.com/user-attachments/assets/717a97f0-dc62-49ec-9b1d-cd105cbee2c3)

> Art-lover는 전시회를 손 쉽게 검색 할 수 있는 입니다.<br/>
> Frontend by 조진호<br/>
> Backend by 조진호 <br/>
> Designed by 조진호 <br/>
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
   	<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white"/>&nbsp 
 </td>
</tr>
	
<tr>
 <td align="center">Back-End</td>
 <td>
	 <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>&nbsp
	 <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>&nbsp
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

 <td align="center">배포</td>
 <td>
	 <img src="https://img.shields.io/badge/cPanel-FF6C2C?style=flat-square&logo=cPanel&logoColor=white"/>&nbsp
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

<details>
  <summary>
    <b>
	활성화 되어 있는 해시태그를 선택하면 해당 관련 게시물만 필터링 된 후, 필터된 게시물에 해당하지 않는 해시 태그는 비활성화
    </b>
  </summary>

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

<details><summary><b>Tanstack Query를 이용하여 검색 api 관리</b></summary>
<br/>

![스크린샷 2024-09-16 오후 7 16 00](https://github.com/user-attachments/assets/ef282666-2866-4950-9b25-c6261ee5abc2)


```jsx
function Search() {
  const [paginationValue, setPaginationValue] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const initialLoadRef = useRef(true);

  const { menuValue, setMenuValue } = useBearsStore(); // Access Zustand store

  const onSearch = useCallback(
    (searchString) => setSearchQuery(searchString),
    []
  );

  // Tanstack Query 사용
  const {
    data: showsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["shows", searchQuery, menuValue, paginationValue],
    queryFn: () =>
      fetchShowsbySearchQuery(searchQuery, menuValue, paginationValue),
    keepPreviousData: true, // 추가적인 옵션을 여기에 넣을 수 있습니다.
    staleTime: 1000 * 5,
  });
  // 페이지 카운트를 계산합니다.
  const pageCount = showsData ? Math.ceil(showsData.totalCount / 10) : 1;

  // 페이징 변화 시 스크롤 조정
  React.useEffect(() => {
    if (!initialLoadRef.current) {
      let location = document.querySelector("#Art").offsetTop;
      window.scrollTo({
        top: location - 20,
      });
    } else {
      initialLoadRef.current = false;
    }
  }, [paginationValue]);
```

</details>

## **5. 트러블 슈팅**

<b style="font-size:18px">문제1</b><br/>

- Browser에서 Refresh를 하면 중요 state 값이 default로 돌아오는 문제 발생 

<b style="font-size:18px">해결1</b><br/>

- (해결 과정 중 발생한 문제) 
	- Zustand로 상태 관리 하고 persist의 getStorage를 활용<br/>
	- localStorage에 원하지 않는 정보도 저장 되는 문제 발생<br/>

- (해결)
	- getStorage 대신 partialize를 이용하여 원하는 state만 저장 <br/>

<b style="font-size:18px">문제2</b><br/>

- 사용자가 검색 입력창에 타이핑을 할 때, 입력하는 각 문자마다 onSearch 함수가 호출되고, 불필요한 API 호출이 이뤄지게 됨.
![스크린샷 2024-09-18 오전 12 07 58](https://github.com/user-attachments/assets/4eabc55a-4cd6-4244-9750-1faf53356347)

<b style="font-size:18px">해결2</b><br/>

- debounce를 이용해서 사용자가 입력을 멈출때 500ms대기 <br/>
- 사용자가 500ms 이내로 타이핑 할 경우 api 요청을 하지 않음 <br/>
- 마지막 타이핑으로부터 500ms 지나면 api 호출 <br/>


<b style="font-size:18px">문제3</b><br/>

- API를 불러오는 작업이 많아 중복되는 데이터 처리를 위해 캐싱할 필요가 있음
- 비동기 작업이 여러 번 중첩되어 있으며, 성능 최적화를 위해 useEffect를 다수 사용함. 그러나 이러한 방식은 중복 API 호출 및 비효율성을 유발할 수 있어 개선할 필요가 있음

<b style="font-size:18px">해결3</b><br/>

- TanstackQuery를 이용하여 API 호출을 최적화함 <br/>

<b style="font-size:18px">문제4</b><br/>

- TanstackQuery를 이용해서 API 관리하는 작업중, 게시물에 접속했을 때, 브라우저가 이전의 스크롤 위치를 기억하고 다시 해당 페이지에 접근할 때 이전 스크롤 위치에서 랜더링 되는 현상 발생

<b style="font-size:18px">해결4</b><br/>

- window.scrollTo(0, 0); 를 적용하여 해결 <br/>

<b style="font-size:18px">문제5</b><br/>

- TagsCheckBox.js 수정중 useEffect에서 valueKeys가 의존성으로 설정되어 있는데, 이 값이 매번 새로운 배열로 인식되어 fetchTagId가 계속 호출 되어 무한 re-rendering 발생

<b style="font-size:18px">해결5</b><br/>

- Object.values(items)는 매 렌더링마다 새로운 배열을 생성하므로 이를 useMemo를 사용하여 캐싱
![스크린샷 2024-09-18 오전 9 28 53](https://github.com/user-attachments/assets/32893e3d-4a2b-442a-807a-f89b35cf72a1)

<b style="font-size:18px">문제6</b><br/>
- 태그 ID와 태그 이름을 병렬로 요청하지 않고, 한 번의 요청에서 처리할 수 있도록 구조를 변경하면 성능 개선 가능
  
<b style="font-size:18px">해결6</b><br/>

- 태그 ID와 태그 이름을 한 번의 병합된 비동기 작업에서 처리하여, 불필요한 데이터 가공을 최소화<br/>

</details>
