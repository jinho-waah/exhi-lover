import * as React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import GlobalStyle from "../../lib/styles/fontStyle";

const PostBlock = styled.div`
  padding: 5px 5px 19px 5px;
  width: 95%;
  margin: 0 auto;
`;

const ContextBoxes = styled.div`
  margin: 0;
  width: 100%;
  max-width: 45rem;
`;

const HoverEffect = styled.div`
  background: #1b1b1b;
  &:hover {
  background: ${(props) => props.color || "#ec6c03"};
  h1,
  h2,
  h3 {
    color: black;
    text-decoration: underline;
  }
  h4,
  h5 {
    color: black;
  }
  strong {
    color: black;
  }

  img {
    transform: scale(1.1);
  }
`;

const ContextBox = styled.div`
  padding: 0.001rem 0 8px 15px;
  flex: 1 0 auto;
`;

const PostTitle = styled.div`
  text-align: left;
  color: white;
  strong {
    color: ${(props) => props.color || "#ec6c03"};
  }
  font-family: "Happiness-Sans-Title", sans-serif;
`;

const PostContent = styled.div`
  text-align: left;
  font-family: "Happiness-Sans-Bold", sans-serif;
  padding-bottom: 0.5rem;
  h1,
  h2,
  h3,
  h4 {
    padding-top: 1.24rem;
    color: white;
    margin: 0 0 1rem 0;
  }
  h5 {
    color: lightgray;
    margin: 0 0.5rem 0rem 0;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* maintain 16:9 aspect ratio */
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`;

const Post = ({ show, color, tags }) => {
  const navigate = useNavigate();
  const {
    id,
    show_name,
    show_artist,
    show_search,
    show_term,
    show_city,
    gallery,
    show_place,
    show_place_detail,
    show_place_eng,
    show_price,
    show_link,
    show_imgs,
    show_brief,
  } = show;
  const imgSrc = "/upload/shows/" + show_place_eng + "/" + id + "/1.png";

  const handleClickOpen = () => {
    navigate(`/shows/${id}`, { state: { color } });
  };
  return (
    <>
      <GlobalStyle />
      <PostBlock>
        <div onClick={handleClickOpen}>
          <ContextBoxes>
            <HoverEffect color={color}>
              <ContextBox>
                <PostTitle color={color}>
                  <h2>
                    {show_place}
                    <br />
                    <strong>{show_name}</strong>
                  </h2>
                </PostTitle>
                <PostContent>
                  <h4>{show_term}</h4>
                  {tags &&
                    tags
                      .sort((a, b) =>
                        a.includes("사진촬영 가능")
                          ? -1
                          : b.includes("사진촬영 가능")
                          ? 1
                          : 0
                      )
                      .map((tag, index) => {
                        return <h5 key={index}>#{tag}</h5>;
                      })}
                </PostContent>
              </ContextBox>

              <ImageBlock>
                <img src={imgSrc} alt="" loading="lazy" />
              </ImageBlock>
            </HoverEffect>
          </ContextBoxes>
        </div>
      </PostBlock>
    </>
  );
};

export default React.memo(Post);
