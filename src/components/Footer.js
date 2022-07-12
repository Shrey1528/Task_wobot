import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <FooterStyled>Terms of use | Privacy Policy</FooterStyled>;
}

const FooterStyled = styled.div`
  position: absolute;
  top: 92%;
  left: 45%;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 15px;
  color: #545454;
`;
