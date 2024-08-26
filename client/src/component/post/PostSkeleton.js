import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
import colorSet from "../../lib/styles/colorSet";

const TemplateBlock = styled.div`
  padding-top: 2px;
  box-sizing: border-box;
  align-items: center;
  flex-flow: row wrap;
`;
const PostBlock = styled.div`
  padding: 5px 14px 19px 14px;
  width: 100%;
  margin: 0 auto;
`;

const ContextBoxes = styled.div`
  margin: 0;
  width: 100%;
  max-width: 720px;
`;

const HoverEffect = styled.div`
  background: #191919;
  //   background: #393939;
`;

const ContextBox = styled.div`
  padding: 1px 0 8px 15px;
  flex: 1 0 auto;
`;

const PostTitle = styled.div`
  text-align: left;
  color: white;
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
  background: #191919;
  // height: 0;
  // padding-bottom: 56.25%; /* maintain 16:9 aspect ratio */
  aspect-ratio: 16/9;
  position: relative;
  bottom: 0px;
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

const PostSkeleton = () => {
  return (
    <TemplateBlock>
      <PostBlock>
        <ContextBoxes>
          <HoverEffect>
            <ContextBox>
              <PostTitle>
                <h2>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={300}
                    height={30}
                  />
                  <br />
                  <strong>
                    {" "}
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={300}
                      height={30}
                    />
                  </strong>
                </h2>
              </PostTitle>
              <PostContent>
                <h4>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={300}
                    height={30}
                  />
                </h4>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={300}
                  height={30}
                />
              </PostContent>
            </ContextBox>

            <ImageBlock>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={300}
                height={30}
              />
            </ImageBlock>
          </HoverEffect>
        </ContextBoxes>
      </PostBlock>
    </TemplateBlock>
  );
};

export default PostSkeleton;
