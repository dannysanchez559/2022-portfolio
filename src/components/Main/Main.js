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
  z-index: 0;

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    top: 70vh;
    height: 130vh;
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 576px) {
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
