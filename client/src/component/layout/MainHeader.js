import new_white4 from "../../lib/logo/new_white4.png";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 28px;
  border-bottom: 0.03rem solid #464646;
`;

const ImageHeader = styled.img`
  box-sizing: border-box;
  margin-left: 9px;
  border: white;
  width: 230px;
  height: auto;
`;

const MainHeader = () => {
  return (
    <Container>
      {/* <ImageHeader src={logo_white} className="Logo" /> */}
      {/* <ImageHeader src={new_white} className="Logo" /> */}
      <ImageHeader src={new_white4} className="Logo" />
      {/* <ImageHeader src={new_white3} className="Logo" /> */}
    </Container>
  );
};

export default React.memo(MainHeader);
