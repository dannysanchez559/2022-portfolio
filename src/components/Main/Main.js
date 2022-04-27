import React from "react";
import Nav from "../Nav/Nav";
import TopPage from "../TopPage/TopPage";
import AboutMe from "../AboutMe/AboutMe";
import Work from "../Work/Work";
import styled from "styled-components";
import { ReactComponent as AboutMeBackground } from "../../img/aboutMeBackgroundSizeOne.svg";

const MainWrapper = styled.div`
  background-color: #191919;
  color: #fffaf1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 400vh;
`;

const AboutMeBackgroundWrapper = styled.div`
  position: absolute;
  top: 85vh;
  right: 0;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Nav />
      <TopPage />
      {/* Background purple ribbon */}
      <AboutMeBackgroundWrapper style={{ zIndex: 0 }}>
        <AboutMeBackground style={{ width: "100vw" }} />
      </AboutMeBackgroundWrapper>
      <AboutMe />
      <Work />
    </MainWrapper>
  );
};

export default Main;
