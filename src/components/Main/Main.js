import React from "react";
import Nav from "../Nav/Nav";
import TopPage from "../TopPage/TopPage";
import AboutMe from "../AboutMe/AboutMe";
import styled from "styled-components";
import { ReactComponent as TriangleBackground } from "../../img/triangleBackground.svg";

const MainWrapper = styled.div`
  background-color: #191919;
  color: #fffaf1;
  display: flex;
  flex-direction: column;
`;
const TriangleBackgroundWrapper = styled.div`
  position: absolute;
  top: 65vh;
  right: 0;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Nav />
      <TopPage />
      <TriangleBackgroundWrapper style={{ zIndex: 0 }}>
        <TriangleBackground style={{ maxWidth: "100%" }} />
      </TriangleBackgroundWrapper>

      <AboutMe />
    </MainWrapper>
  );
};

export default Main;
