import logo_white from "../../lib/logo/logo_white.png";
import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: #000000;
  height: 4.2rem;
  display: flex;
  padding-top: 12px;
  padding-left: 14px;
  padding-bottom: 12px;
  border-bottom: 0.03rem solid #464646;
`;

const ImageHeader = styled.img`
  box-sizing: border-box;
  height: 100%;
  width: auto;
`;

const SubHeader = () => {
  return (
    <Container>
      <Link to={"/"}>
        <ImageHeader src={logo_white} className="Logo" />
      </Link>
    </Container>
  );
};

export default React.memo(SubHeader);
