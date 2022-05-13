import React from "react";
import styled from "styled-components";
import { default as AboutMePicture } from "../../img/aboutMePicture.svg";
import style from "./style.js";

const AboutMeWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  z-index: 1;
`;

const LeftSideWrapper = styled.div`
  height: 90vh;
  width: 35vw;
  display: flex;
  align-items: center;
  img {
    width: 30em;
  }
`;

const RightSideWrapper = styled.div`
  width: 40vw;
  height: 75vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: linear-gradient(
    160.94deg,
    #7567a7 44.13%,
    rgba(135, 121, 188, 0.56) 91.61%
  );
  box-shadow: -20px 10px 6px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 30px;
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
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

const AboutContentWrapper = styled.div`
  max-width: 35vw;
  p {
    font-size: 1.6rem;
    text-align: right;
    font-family: "Raleway", sans-serif;
    line-height: 125%;
    font-weight: 400;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper id="about">
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
