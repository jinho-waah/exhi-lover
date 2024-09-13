<h1 align='center'><b>Exhi-Lover</b></h1>

## **1. Exhi-lover 소개**

![GameBuddy Poster](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/80045006/f6156e63-9a8d-4af4-aab5-4b0ad3da53e3)

> Exhi-lover는 전시회를 손쉽게 검색 할 수 있는 입니다.<br/>
> 조진호의 solo project 입니다.
[Exhi-lover URL](https://exhi-lover.com)<br/>
                                                               
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
|       REACT       | Vue.js 보다는 React.js에는 많은 라이브러리와 도구들이 존재해 프로젝트에 적합하다고 판단|
|       Axios       | HTTP 요청을 보다 간편하게 처리하기 위해 사용 |
| Styled-components  |    props나 상태에 따라 동적으로 스타일을 변경할 수 있기에 사용      |
|       Axios       | 데이터를 JSON으로 자동 변환 및 파싱, headers의 content-type이 JSON인 경우 headers 자체를 생략이 가능하여 사용 |
| Image Compressor  |                              이미지의 크기 조절 및 파일 용량을 줄이기 위해 사용                               |




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
|      |        └─ 📂 styles
|      |                ├─ colorSet.js
|      |                ├─ fontStyle.js
|      |                └─ palette.js
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

<details><summary><b>게임 모집 수정 API 커스텀 코드</b></summary>

- API 요청 시, 객체를 JSON으로 변환하여 데이터 등록

```jsx
import axios from "axios";
import masterTokenAPI from "../masterTokenAPI";

async function gameRecruitAPI(
  gameTitle,
  people,
  detail,
  itemImage = "",
  accountName
) {
  try {
    const token = await masterTokenAPI();

    const itemName = [gameTitle, accountName];
    const link = [people, detail, [accountName]];

    const response = await axios.post(
      "https://api.mandarin.weniv.co.kr/product",
      {
        product: {
          itemName: JSON.stringify(itemName),
          price: 1,
          link: JSON.stringify(link),
          itemImage: itemImage
        }
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return "게임 모집글 게시되었습니다!";
  } catch (e) {
    return false;
  }
}

export default gameRecruitAPI;
```

</details>

<details><summary><b>Footer 미디어 쿼리 코드</b></summary>
<br/>

|                                                        웹 반응형                                                         |
| :----------------------------------------------------------------------------------------------------------------------: |
|  ![웹_메인](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/2a7d25de-874d-4426-a7bb-d1f8a6a97521)  |
| ![웹_게시글](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/efe7d5cd-21a6-4326-9f1b-67601565524c) |

- Footer Icon을 정의하는 코드

```jsx
const menus = [
  { name: "홈", icon: StyledHomeIcon, path: "/main", id: "home" },
  { name: "검색", icon: StyledSearchIcon, path: "/search", id: "search" },
  { name: "채팅", icon: StyledChatIcon, path: "/chat", id: "chat" },
  { name: "게시글 작성", icon: StyledWriteIcon, path: "/write", id: "write" },
  {
    name: "프로필",
    icon: StyledProfileIcon,
    path: `/profile/${myData.accountname}`,
    id: "profile"
  }
];

const getInitialActive = () => {
  const matchedMenu = menus.find((menu) =>
    location.pathname.startsWith(menu.path)
  );
  return matchedMenu ? matchedMenu.id : "profile";
};

const [$active, setActive] = useState(getInitialActive);

return (
  <S.FooterContainer>
    {menus.map((menu) => {
      const Icon = menu.icon;
      return (
        <S.Item
          id={menu.id}
          key={menu.id}
          onClick={() => {
            setActive(menu.id);
            navigate(menu.path);
          }}
          $active={$active === menu.id}>
          <Icon $active={$active === menu.id} />
          <span>{menu.name}</span>
        </S.Item>
      );
    })}
  </S.FooterContainer>
);
```

- 화면 너비에 따라 Footer의 위치를 변경해주는 FooterContainer 코드

```jsx
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #25282d;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 900;
  border-top: 1px solid #5c5c5c;

  @media screen and (min-width: 768px) {
    left: 0;
    width: 72px;
    height: calc(100vh - 55px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }
`;
```

- 화면 너비에 따라 Footer Icon을 배치

```jsx
export const Item = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 10px 6px 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4ff")};

  &:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 767px) {
    ${({ id }) =>
      id === "search" &&
      `
        display: none;
      `}
  }

  @media screen and (min-width: 768px) {
    font-size: 0px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: auto;
    padding: 50px 0 0 23px;
    position: relative;

    span {
      position: absolute;
      top: 85%;
      left: 100%;
      transform: translateY(-50%);
      opacity: 0;
      background: var(--color-purple);
      color: white;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 12px;
      white-space: nowrap;
      transition: opacity 0.3s ease-in-out;
      box-shadow: 0px 0px 8px #ffffff90;
    }

    &:hover span {
      opacity: 1;
    }
  }
`;
```

</details>

## **5. 트러블 슈팅**

<b style="font-size:17px">문제</b><br/>

Browser에서 Refresh를 하면 선택한 검색 방식이 default로 돌아오는 문제 발생 

<b style="font-size:17px">해결</b><br/>

localstorage를 활용하여 selectedValue를 로컬 저장소에 저장하여 사용자의 검색 옵션을 기억하고 유지


<br/>




</details>
