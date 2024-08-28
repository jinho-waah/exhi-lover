import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  era,
  genre,
  takePhoto,
  artMovement,
  orient,
  free,
  permanent,
} from "./Tags";
import TagsCheckBox from "./TagsCheckBox";
import HorizontalLine from "../layout/HorizontalLine";
import IdToShow from "./IdToShow";
import PostTemplate from "../post/PostTemplate";

const Box = styled.div`
  align-items: left;
  width: 100%;
  margin: 0 auto;
  padding: 5px 5px 0px 5px;
`;

function HashTag({ selectedHashtag }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [selectedPermanent, setSelectedPermanent] = useState([]);
  const [selectedOrient, setSelectedOrient] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedEra, setSelectedEra] = useState([]);
  const [selectedArtMovement, setSelectedArtMovement] = useState([]);
  const [selectedFree, setSelectedFree] = useState([]);

  const handleCheckedFree = (items) => {
    setSelectedFree(items);
  };
  const handleCheckedPhoto = (items) => {
    setSelectedPhoto(items);
  };
  const handleCheckpermanent = (items) => {
    setSelectedPermanent(items);
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

  useEffect(() => {
    setSelectedItems((prevSelectedItems) => {
      const items = [
        ...selectedPhoto,
        ...selectedOrient,
        ...selectedGenre,
        ...selectedEra,
        ...selectedArtMovement,
        ...selectedFree,
        ...selectedPermanent,
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
    selectedPermanent,
  ]);

  const { shows, tags } = IdToShow({ TagItems: selectedItems });
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
          title={"상설 전시회"}
          items={permanent}
          handleCheckedItems={handleCheckpermanent}
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
