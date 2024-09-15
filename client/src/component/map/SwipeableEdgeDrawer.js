import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import line from "../../lib/icon/line.png";
import close from "../../lib/icon/x2.png";
import FetchShowsInfo from "./FetchShowsInfo";
import FetchShowTags from "./FetchShowTags";
import GlobalStyle from "../../lib/styles/fontStyle";

const Drawer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  justify-content: flex-start; /* Stick to the top */
  align-items: center; /* Center horizontally */
  padding-top: 10px;
  padding-right: 14px;
  padding-left: 14px;
  //   height: ${(props) => props.height}px;
  //   max-height: ${(props) => props.height}px;
  //   height: 200px;
  width: 100%;
  background: #1e1e1e;
  border-radius: 15px 15px 0 0;
  bottom: 0;
  z-index: 999;
`;

const Container = styled.div`
  background: #e2e2e2;
  // justify-content: flex-start; /* Stick to the top */
  flex-direction: column; /* Stack elements vertically */
  width: 100%;
  margin: 10px 10px 3px 10px;
  padding: 10px 10px 0 10px;
  // display: flex;
  flex: 1;
  justify-content: center;
  border-radius: 10px 10px 0 0;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Happiness-Sans-Title", sans-serif;

  .close {
    width: 19px;
    height: 19px;
    position: absolute;
    margin-top: 3px;
    right: 29px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row; /* Stack elements vertically */
  margin-top: 4px;
  margin-bottom: 5px;
  max-height: 128px;
  background: white;
  font-size: 18px;
`;

const ScrollBox = styled.div`
  overflow-y: scroll;
  max-height: 150px;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 84px;
  height: 120px;
  top: 4px;
  margin-left: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain image aspect ratio and cover the container */
  }
`;
const Inform = styled.div`
  height: 128px;
  position: relative;
  margin-left: 16px;
  margin-right: 16px;
  width: calc(100% - 120px); /* Adjust the width as needed */
  overflow: hidden;
  //   white-space: nowrap;

  .mapShowName {
    margin-top: 14px;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines */
    -webkit-box-orient: vertical;

    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    text-overflow: ellipsis;
    overflow: hidden;
  }
  .mapShowTag {
    position: absolute;
    bottom: 31px;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines */
    -webkit-box-orient: vertical;

    color: #b7afaf;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .mapShowTerm {
    position: absolute;
    bottom: 10px;

    color: #232222;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SwipeableEdgeDrawer = ({ gallery, onClose }) => {
  const navigate = useNavigate();
  const galleryInfo = FetchShowsInfo(gallery?.id);
  const tags = FetchShowTags(galleryInfo);

  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };
  const handleClickOpen = (id) => {
    navigate(`/shows/${id}`);
    // navigate(`/shows/${id}`, { state: { color } });
  };

  // console.log(galleryInfo);

  return (
    <>
      <GlobalStyle />
      <Drawer>
        {gallery ? (
          <Container>
            {gallery.title}
            <img
              src={close}
              alt="close"
              className="close"
              onClick={handleClose}
            />
            {galleryInfo.length > 0 ? (
              <ScrollBox>
                {galleryInfo.map((show, index) => {
                  const imgSrc =
                    "/upload/shows/" +
                    show.show_place_eng +
                    "/" +
                    show.id +
                    "/1.webp";
                  return (
                    <Content
                      key={show.id}
                      onClick={() => handleClickOpen(show.id)}
                    >
                      <ImageBox>
                        <img src={imgSrc} alt="" />
                      </ImageBox>
                      <Inform>
                        <div className="mapShowName">{show.show_name}</div>
                        <div className="mapShowTag">
                          {tags !== null && tags[show.id] !== undefined
                            ? tags[show.id].map((tag, index) => (
                                <span key={index} className="tag">
                                  #{tag}{" "}
                                </span>
                              ))
                            : tags !== null && tags[show.id] === undefined
                            ? "Loading"
                            : "Loading"}
                        </div>
                        <div className="mapShowTerm">
                          {show.show_term_start
                            ? `${show.show_term_start} ~ ${show.show_term_end}`
                            : "상설전시"}
                        </div>
                      </Inform>
                    </Content>
                  );
                })}
              </ScrollBox>
            ) : (
              <Content>준비 된 전시가 없습니다.</Content>
            )}
          </Container>
        ) : (
          <div></div>
        )}
      </Drawer>
    </>
  );
};

export default SwipeableEdgeDrawer;


