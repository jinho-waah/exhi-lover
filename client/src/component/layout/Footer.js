import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const FootBox = styled.div`
  bottom: 0;
  width: 100%;
  background: black;
`;

const Foot = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 1.1rem;
  padding-bottom: 0.4rem;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  p {
    margin: 0;
    font-size: 0.9rem;
    Link {
      display: flex;
      alignitems: center;
    }
    svg {
      transform: translateY(4px) translateX(3px);
      font-size: 1.2rem;
      margin-right: 0.2rem;
      color: #f04465;
      padding-right: 0;
    }
    span {
      color: #ffffff;
    }
    .name {
      color: #f04465;
    }
  }
`;

const HrLine = styled.hr`
  width: 96%;
  border: none;
  border-top: 1px solid #868686; /* change the color to blue and thickness to 2px */
`;

const Footer = () => {
  return (
    <FootBox>
      <HrLine />
      <Foot>
        <p>
          2023 Art-lover published. Art is Life. Life is Art. <br />
          MADE BY{" "}
          <Link to="https://www.instagram.com/exhi_lover/" target="_blank">
            <InstagramIcon />
            <span className="name"> EXHI_LOVER</span>
          </Link>
        </p>
      </Foot>
    </FootBox>
  );
};

export default React.memo(Footer);
