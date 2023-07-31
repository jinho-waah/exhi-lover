import React, { useState, useEffect, useCallback } from "react";
import PostTemplate from "../post/PostTemplate";
import SearchBar from "../items/SearchBar";
import styled from "styled-components";
import HorizontalLine from "../common/HorizontalLine";
import { fetchShowsbySearchQuery } from "../../lib/api/Api";

const ShowContent = styled.div`
  text-align: left;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  padding: 0.4rem 0 0 1.1rem;
  color: white;
  background-color: #000000;
  font-family: "Happiness-Sans-Title", sans-serif;
`;

const DefaultShow = styled.div`
  color: white;
  padding-left: 0.8rem;
  height: 60rem;
  p {
    margin 0;
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
`;

const NoneShow = styled.div`
  color: white;
  padding-left: 0.8rem;
  height: 20rem;
  p {
    margin 0;
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
`;

function Search() {
  const [shows, setShows] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = useCallback(
    (searchString) => setSearchQuery(searchString),
    []
  );

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setError(null);
        setShows(null);
        const showsData = await fetchShowsbySearchQuery(searchQuery);
        setShows(showsData);
      } catch (e) {
        setError(e);
      }
    };
    fetchShows();
  }, [searchQuery]);

  if (error)
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <NoneShow>
          <p></p>
        </NoneShow>
      </>
    );
  if (!shows)
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
        <DefaultShow>
          <p></p>
        </DefaultShow>
      </>
    );
  if (shows.length === 0)
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <HorizontalLine key="horizontal-line" />
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
        <ShowContent>Exhibitions</ShowContent>
        {shows && <PostTemplate shows={shows} />}
      </>
    );
  }
}

export default React.memo(Search);
