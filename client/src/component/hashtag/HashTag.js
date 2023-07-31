import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { era, genre, takePhoto, artMovement, orient, free } from "./Tags";
import TagsCheckBox from "./TagsCheckBox";
import HorizontalLine from "../layout/HorizontalLine";
import IdToShow from "./IdToShow";
import PostTemplate from "../post/PostTemplate";

const Box = styled.div`
  algin-item: left;
  width: 100%;
  padding: 0.4rem 0 0 1.1rem;
  margin: 0 auto;
  padding: 5px 5px 30px 5px;
`;

function HashTag() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [selectedOrient, setSelectedOrient] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedEra, setSelectedEra] = useState([]);
  const [selectedArtMovement, setSelectedArtMovement] = useState([]);
  const [selectedFree, setSelectedFree] = useState([]);

  const handleCheckedPhoto = (items) => {
    setSelectedPhoto(items);
  };
  const handleCheckedOrient = (items) => {
    setSelectedOrient(items);
  };
  const handleCheckedGenre = (items) => {
    setSelectedGenre(items);
  };
  const handleCheckedEra = (items) => {
    setSelectedEra(items);
  };
  const handleCheckedArtMovement = (items) => {
    setSelectedArtMovement(items);
  };
  const handleCheckedFree = (items) => {
    setSelectedFree(items);
  };

  useEffect(() => {
    setSelectedItems((prevSelectedItems) => {
      const items = [
        ...selectedPhoto,
        ...selectedOrient,
        ...selectedGenre,
        ...selectedEra,
        ...selectedArtMovement,
        ...selectedFree,
      ];
      const orderedItmes = items.sort((a, b) => a - b);
      return orderedItmes;
    });
  }, [
    selectedPhoto,
    selectedOrient,
    selectedGenre,
    selectedEra,
    selectedArtMovement,
    selectedFree,
  ]);

  const { shows, tags } = IdToShow({ TagItems: selectedItems });
  // useEffect(() => {
  //   console.log(tags);
  // });
  return (
    <>
      <Box>
        <HorizontalLine />
        <TagsCheckBox
          title={"무료 전시회"}
          items={free}
          handleCheckedItems={handleCheckedFree}
          tags={tags}
        />
        <HorizontalLine />
        <TagsCheckBox
          title={"촬영 가능 여부"}
          items={takePhoto}
          handleCheckedItems={handleCheckedPhoto}
          tags={tags}
        />

        <HorizontalLine />
        <TagsCheckBox
          title={"지역별"}
          items={orient}
          handleCheckedItems={handleCheckedOrient}
          tags={tags}
        />
        <HorizontalLine />
        <TagsCheckBox
          title={"장르별"}
          items={genre}
          handleCheckedItems={handleCheckedGenre}
          tags={tags}
        />
        <HorizontalLine />
        <TagsCheckBox
          title={"시대별"}
          items={era}
          handleCheckedItems={handleCheckedEra}
          tags={tags}
        />
        <HorizontalLine />
        <TagsCheckBox
          title={"미술사조"}
          items={artMovement}
          handleCheckedItems={handleCheckedArtMovement}
          tags={tags}
        />
        <HorizontalLine />
        {shows && <PostTemplate shows={shows} />}
      </Box>
    </>
  );
}

export default React.memo(HashTag);
