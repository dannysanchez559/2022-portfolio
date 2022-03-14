import React from "react";
import styled from "styled-components";
import { default as AboutMePicture } from "../../img/aboutMePicture.svg";
import style from "./style.js";

const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  z-index: 1;
`;

const LeftSideWrapper = styled.div`
  height: 90vh;
  width: 35vw;

  img {
    width: 30em;
    position: relative;
    margin-top: 20vh;
  }
`;

const RightSideWrapper = styled.div`
  width: 45vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const AboutHeaderWrapper = styled.div`
  text-align: right;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  h1 {
    font-size: 3em;
  }
`;

const AboutContentWrapper = styled.div`
  max-width: 35vw;
  p {
    font-size: 1.8rem;
    text-align: right;
    font-family: "Fredoka", sans-serif;
    line-height: 125%;
    font-weight: 400;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <LeftSideWrapper>
        <img src={AboutMePicture} />
      </LeftSideWrapper>
      <RightSideWrapper>
        <AboutHeaderWrapper>
          <h1>about me.</h1>
        </AboutHeaderWrapper>
        <AboutContentWrapper>
          <p>
            I focus on the latest and most widely supported Front End mobile
            technologies such as React JS and React Native. I am also passionate
            for clean and elegant UI Design. You can either find me working on a
            coding project, enjoying a nice trail outdoors on my Electric
            Scooter, or enjoying an ice cold Craft Beer on my free time. 😁 🛴
            🍺
          </p>
        </AboutContentWrapper>
      </RightSideWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
