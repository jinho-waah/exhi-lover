import styled from "styled-components";
import HashTag from "./HashTag";
import React from "react";

const HashTagBox = styled.div`
  padding-top: 0.2rem;
  box-sizing: border-box;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

const HashTagTemplate = () => {
  return (
    <HashTagBox>
      <HashTag />
    </HashTagBox>
  );
};
export default React.memo(HashTagTemplate);
