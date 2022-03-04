import React from "react";
import styled from "styled-components";
import style from "./style.js";

const AboutMeWrapper = styled.div`
  display: flex;
  height: 100vh;
  z-index: 1;
`;
const RightSideWrapper = styled.div`
  width: 50vw;
`;
const AboutHeaderWrapper = styled.div``;
const AboutHeader = styled.h1`
  font-size: 3em;
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <RightSideWrapper>
        <AboutHeaderWrapper>
          <AboutHeader>about me.</AboutHeader>
        </AboutHeaderWrapper>
      </RightSideWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
