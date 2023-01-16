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
  padding: 10px 10px;
  img {
    width: 9%;
    height: 5%;
    margin-left: 2rem;
  }
`;
