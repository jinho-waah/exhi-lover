import React, { useState, useCallback, useRef } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useQuery } from "@tanstack/react-query"; // Tanstack Query를 사용하기 위해 추가
import PostTemplate from "../post/PostTemplate";
import SearchBar from "../button/SearchBar";
import styled from "styled-components";
import HorizontalLine from "../layout/HorizontalLine";
import { fetchShowsbySearchQuery } from "../../lib/api/Api"; // 서버 데이터를 가져오는 함수
import PostSkeleton from "../post/PostSkeleton"; // Zustand store import
import useBearsStore from "../../lib/zustand/bearsStore";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShowContent = styled.div`
  text-align: left;
  font-size: 40px;
  font-weight: bold;
  padding: 6px 0 0 18px;
  color: white;
  font-family: "Happiness-Sans-Title", sans-serif;
`;

const NoneShow = styled.div`
  color: white;
  padding-left: 0.8rem;
  height: 600px;
  p {
    margin: 0;
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
`;

const SelectArea = styled.div`
  margin-left: auto;
  margin-right: 15px;
  margin-top: 10px;
`;

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set the theme mode to dark
  },
});

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

  // 데이터 로딩 중일 때
  if (isLoading) {
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <ThemeProvider theme={darkTheme}>
          <SearchContainer>
            <ShowContent id="Art">Exhibitions</ShowContent>
            <SelectArea>
              <FormControl>
                <Select
                  value={menuValue}
                  onChange={(event) => setMenuValue(event.target.value)}
                  size="small"
                  variant="outlined"
                  color="primary"
                  MenuProps={{
                    disableScrollLock: true, // 이 속성을 추가하여 스크롤 잠금 비활성화
                  }}
                >
                  <MenuItem value="0">최신순</MenuItem>
                  <MenuItem value="1">마감순</MenuItem>
                  <MenuItem value="2">상설전</MenuItem>
                  <MenuItem value="3">예정전시</MenuItem>
                </Select>
              </FormControl>
            </SelectArea>
          </SearchContainer>
        </ThemeProvider>
        <PostSkeleton />
      </>
    );
  }

  // 에러가 발생했을 때
  if (error) {
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <ThemeProvider theme={darkTheme}>
          <SearchContainer>
            <ShowContent id="Art">Exhibitions</ShowContent>
            <SelectArea>
              <FormControl>
                <Select
                  value={menuValue}
                  onChange={(event) => setMenuValue(event.target.value)}
                  size="small"
                  variant="outlined"
                  color="primary"
                  MenuProps={{
                    disableScrollLock: true, // 이 속성을 추가하여 스크롤 잠금 비활성화
                  }}
                >
                  <MenuItem value="0">최신순</MenuItem>
                  <MenuItem value="1">마감순</MenuItem>
                  <MenuItem value="2">상설전</MenuItem>
                  <MenuItem value="3">예정전시</MenuItem>
                </Select>
              </FormControl>
            </SelectArea>
          </SearchContainer>
        </ThemeProvider>
        <NoneShow>
          <p>ERROR!</p>
          <p>페이지 맨 아래 MADE BY EXHI-LOVER를</p>
          <p>눌러서 exhi_lover 계정으로</p>
          <p>발생한 문제를 DM으로 제보해주시면</p>
          <p>정말 감사하겠습니다.</p>
        </NoneShow>
      </>
    );
  }

  // 검색 결과가 없을 때
  if (showsData?.rows.length === 0) {
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <ThemeProvider theme={darkTheme}>
          <SearchContainer>
            <ShowContent id="Art">Exhibitions</ShowContent>
            <SelectArea>
              <FormControl>
                <Select
                  value={menuValue}
                  onChange={(event) => setMenuValue(event.target.value)}
                  size="small"
                  variant="outlined"
                  color="primary"
                  MenuProps={{
                    disableScrollLock: true, // 이 속성을 추가하여 스크롤 잠금 비활성화
                  }}
                >
                  <MenuItem value="0">최신순</MenuItem>
                  <MenuItem value="1">마감순</MenuItem>
                  <MenuItem value="2">상설전</MenuItem>
                  <MenuItem value="3">예정전시</MenuItem>
                </Select>
              </FormControl>
            </SelectArea>
          </SearchContainer>
        </ThemeProvider>
        <NoneShow>
          <p>검색 결과에 맞는 전시가 없습니다.</p>
          <p>다른 검색어를 입력해주세요.</p>
        </NoneShow>
      </>
    );
  }

  // 검색 결과가 있을 때
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <HorizontalLine key="horizontal-line" />
      <ThemeProvider theme={darkTheme}>
        <SearchContainer>
          <ShowContent id="Art">Exhibitions</ShowContent>
          <SelectArea>
            <FormControl>
              <Select
                value={menuValue}
                onChange={(event) => setMenuValue(event.target.value)}
                size="small"
                variant="outlined"
                color="primary"
                disableScrollLock
                MenuProps={{
                  disableScrollLock: true, // 이 속성을 추가하여 스크롤 잠금 비활성화
                }}
              >
                <MenuItem value="0">최신순</MenuItem>
                <MenuItem value="1">마감순</MenuItem>
                <MenuItem value="2">상설전</MenuItem>
                <MenuItem value="3">예정전시</MenuItem>
              </Select>
            </FormControl>
          </SelectArea>
        </SearchContainer>
      </ThemeProvider>
      <PostTemplate
        shows={showsData?.rows}
        paginationValue={paginationValue}
        setPaginationValue={setPaginationValue}
        pageCount={pageCount}
      />
    </>
  );
}

export default React.memo(Search);
