import React from "react";
import styled from "styled-components";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <AppStyled>
      <Navbar />
      <Body />
      <Footer />
    </AppStyled>
  );
}

const AppStyled = styled.div``;
