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

```jsx

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

<details><summary><b>Footer 미디어 쿼리 코드</b></summary>
<br/>


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

(해결 과정 중 발생한 문제) 
- Zustand로 상태 관리 하고 persist의 getStorage를 활용<br/>
- localStorage에 원하지 않는 정보도 저장 되는 문제 발생<br/>

(해결)
- partialize를 이용하여 원하는 state만 저장 <br/>


<br/>




</details>
