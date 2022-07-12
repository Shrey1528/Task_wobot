import React from "react";
import styled from "styled-components";
import logo from "../images/wobot-logo.png";

export default function Navbar() {
  return (
    <NavbarStyled>
      <img src={logo} alt="Wobot logo" />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  img {
    position: absolute;
    width: 9%;
    height: 5%;
    left: 6%;
    top: 4%;
  }
`;
