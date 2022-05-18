import React from "react";
import Nav from "../Nav/Nav";
import TopPage from "../TopPage/TopPage";
import AboutMe from "../AboutMe/AboutMe";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import { MainWrapper, AboutMeBackgroundWrapper } from "./style.js";

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
