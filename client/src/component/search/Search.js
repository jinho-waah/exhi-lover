import React, { useState, useEffect, useCallback, useRef } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import PostTemplate from "../post/PostTemplate";
import SearchBar from "../button/SearchBar";
import styled from "styled-components";
import HorizontalLine from "../layout/HorizontalLine";
import { fetchShowsbySearchQuery } from "../../lib/api/Api";
import PostSkeleton from "../post/PostSkeleton";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShowContent = styled.div`
  text-align: left;
  font-size: 40px;
  font-weight: bold;
  // line-height: 1.2px;
  padding: 6px 0 0 18px;
  color: white;
  font-family: "Happiness-Sans-Title", sans-serif;
`;

const NoneShow = styled.div`
  color: white;
  padding-left: 0.8rem;
  height: 400px;
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
  const [shows, setShows] = useState(null);
  const [error, setError] = useState(null);
  const [paginationValue, setPaginationValue] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedValue, setSelectedValue] = useState("1");
  const prevSelectedValueRef = useRef(selectedValue);
  const initialLoadRef = useRef(true);

  const onSearch = useCallback(
    (searchString) => setSearchQuery(searchString),
    []
  );

  useEffect(() => {
    const storedSelectedValue = localStorage.getItem("selectedValue");
    if (storedSelectedValue) {
      setSelectedValue(storedSelectedValue);
    }
  }, []);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setError(null);
        setShows(null);
        const showsData = await fetchShowsbySearchQuery(
          searchQuery,
          selectedValue,
          paginationValue
        );
        setShows(showsData.rows);
        setPageCount(Math.ceil(showsData.totalCount / 10));
      } catch (e) {
        setError(e);
      }
    };

    fetchShows();
  }, [searchQuery, paginationValue]);

  useEffect(() => {
    const fetchShowsByValue = async () => {
      try {
        setError(null);
        setShows(null);
        const showsData = await fetchShowsbySearchQuery(
          searchQuery,
          selectedValue,
          paginationValue
        );
        setShows(showsData.rows);
        setPageCount(Math.ceil(showsData.totalCount / 10));
      } catch (e) {
        setError(e);
      }
    };

    if (prevSelectedValueRef.current !== selectedValue) {
      fetchShowsByValue();
      prevSelectedValueRef.current = selectedValue; // Update the stored previous value
    }
  }, [selectedValue, paginationValue]);

  useEffect(() => {
    localStorage.setItem("selectedValue", selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    if (!initialLoadRef.current) {
      let location = document.querySelector("#Exhi").offsetTop;
      window.scrollTo({
        top: location - 20,
      });
    } else {
      initialLoadRef.current = false;
    }
  }, [paginationValue]);

  if (error)
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <ThemeProvider theme={darkTheme}>
          <SearchContainer>
            <ShowContent id="Exhi">Exhibitions</ShowContent>

            <SelectArea>
              <FormControl>
                <Select
                  value={selectedValue} // Use the selectedValue state here
                  onChange={(event) => setSelectedValue(event.target.value)} // Update the selectedValue state
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  <MenuItem value="1">최신순</MenuItem>
                  <MenuItem value="2">개최순</MenuItem>
                  <MenuItem value="3">마감순</MenuItem>
                  <MenuItem value="4">상설전</MenuItem>
                </Select>
              </FormControl>
            </SelectArea>
          </SearchContainer>
        </ThemeProvider>
        <NoneShow>
          <p>ERROR!</p>
        </NoneShow>
      </>
    );
  if (!shows)
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <ThemeProvider theme={darkTheme}>
          <SearchContainer>
            <ShowContent id="Exhi">Exhibitions</ShowContent>
            <SelectArea>
              <FormControl>
                <Select
                  value={selectedValue} // Use the selectedValue state here
                  onChange={(event) => setSelectedValue(event.target.value)} // Update the selectedValue state
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  <MenuItem value="1">최신순</MenuItem>
                  <MenuItem value="2">개최순</MenuItem>
                  <MenuItem value="3">마감순</MenuItem>
                  <MenuItem value="4">상설전</MenuItem>
                </Select>
              </FormControl>
            </SelectArea>
          </SearchContainer>
        </ThemeProvider>
        <PostSkeleton />
      </>
    );
  if (shows.length === 0)
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <ThemeProvider theme={darkTheme}>
          <SearchContainer>
            <ShowContent id="Exhi">Exhibitions</ShowContent>
            <SelectArea>
              <FormControl>
                <Select
                  value={selectedValue} // Use the selectedValue state here
                  onChange={(event) => setSelectedValue(event.target.value)} // Update the selectedValue state
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  <MenuItem value="1">최신순</MenuItem>
                  <MenuItem value="2">개최순</MenuItem>
                  <MenuItem value="3">마감순</MenuItem>
                  <MenuItem value="4">상설전</MenuItem>
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
  if (shows.length !== 0) {
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <ThemeProvider theme={darkTheme}>
          <SearchContainer>
            <ShowContent id="Exhi">Exhibitions</ShowContent>
            <SelectArea>
              <FormControl>
                <Select
                  value={selectedValue} // Use the selectedValue state here
                  onChange={(event) => setSelectedValue(event.target.value)} // Update the selectedValue state
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  <MenuItem value="1">최신순</MenuItem>
                  <MenuItem value="2">개최순</MenuItem>
                  <MenuItem value="3">마감순</MenuItem>
                  <MenuItem value="4">상설전</MenuItem>
                </Select>
              </FormControl>
            </SelectArea>
          </SearchContainer>
        </ThemeProvider>
        {shows && (
          <PostTemplate
            shows={shows}
            paginationValue={paginationValue}
            setPaginationValue={setPaginationValue}
            pageCount={pageCount}
          />
        )}
      </>
    );
  }
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <HorizontalLine key="horizontal-line" />
      <ThemeProvider theme={darkTheme}>
        <SearchContainer>
          <ShowContent id="Exhi">Exhibitions</ShowContent>
          <SelectArea>
            <FormControl>
              <Select
                value={selectedValue} // Use the selectedValue state here
                onChange={(event) => setSelectedValue(event.target.value)} // Update the selectedValue state
                size="small"
                variant="outlined"
                color="primary"
              >
                <MenuItem value="1">최신순</MenuItem>
                <MenuItem value="2">개최순</MenuItem>
                <MenuItem value="3">마감순</MenuItem>
                <MenuItem value="4">상설전</MenuItem>
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

export default React.memo(Search);
