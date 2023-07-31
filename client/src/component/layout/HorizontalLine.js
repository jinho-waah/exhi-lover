import styled from "styled-components";
import React from "react";

const HorizonLine = styled.hr`
  width: 90%;
  border: none;
  border-top: 1px solid #464646; /* change the color to blue and thickness to 2px */
  margin: 1rem auto;
`;

const HorizontalLine = () => {
  return <HorizonLine />;
};

export default React.memo(HorizontalLine);
