import React from "react";
import Nav from "../Nav/Nav";
import TopPage from "../TopPage/TopPage";
import AboutMe from "../AboutMe/AboutMe";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import styled from "styled-components";
import aboutMeBackground from "../../img/aboutMeBackground.svg";

const MainWrapper = styled.div`
  background-color: #191919;
  color: #fffaf1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: auto;
  overflow-x: hidden;
`;

const AboutMeBackgroundWrapper = styled.div`
  position: absolute;
  top: 75vh;
  right: 0;
  left: 0;
  background-image: url(${aboutMeBackground});
  background-size: cover;
  width: 100%;
  height: 125vh;

  // Desktops
  @media (max-width: 1920px) {
    top: 70vh;
    height: 130vh;
  }

  // Tablets
  @media (max-width: 900px) {
    background: none;
  }
`;
const Main = () => {
  return (
    <MainWrapper>
      <Nav />
      <TopPage />
      {/* Background purple ribbon */}
      <AboutMeBackgroundWrapper />
      <AboutMe />
      <Work />
      <Contact />
    </MainWrapper>
  );
};

export default Main;
