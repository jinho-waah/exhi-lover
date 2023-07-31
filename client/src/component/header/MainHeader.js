import logo_white from "../../lib/logo/logo_white.png";
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
`;

const MainHeader = () => {
  return (
    <Container>
      <ImageHeader src={logo_white} className="Logo" />
    </Container>
  );
};

export default React.memo(MainHeader);
