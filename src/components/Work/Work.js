import React from "react";
import styled from "styled-components";
import workBackground from "../../img/axiom-pattern.png";
import spoilistPic from "../../img/spoilist.svg";
import quickRPic from "../../img/quickR.svg";
import pocketDexPic from "../../img/pocketDex.svg";
import movieAppPic from "../../img/movieApp.svg";

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0 5vw;
  margin-top: 0vh;
  background-image: url(${workBackground});
  background-repeat: repeat;
  border: 2px solid blue;
`;

const WorkHeaderWrapper = styled.div`
  height: 15vh;
  border: 1px solid beige;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  margin: 10vh 5vw;
  h1 {
    font-size: 3em;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

const WorkProjectsWrapper = styled.div`
  border: 1px solid pink;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 5vw;
`;

const ProjectContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 325px;
  height: 250px;
  border: 2px solid white;
  border-radius: 25px;
  margin-bottom: 5em;

  img {
    border-radius: 25px;
  }
`;

const Work = () => {
  return (
    <WorkWrapper>
      <WorkHeaderWrapper>
        <h1>work.</h1>
      </WorkHeaderWrapper>
      <WorkProjectsWrapper>
        <ProjectContainer>
          <img src={spoilistPic} />
        </ProjectContainer>
        <ProjectContainer>
          <img src={quickRPic} />
        </ProjectContainer>
        <ProjectContainer>
          <img src={pocketDexPic} />
        </ProjectContainer>
        <ProjectContainer>
          <img src={movieAppPic} />
        </ProjectContainer>
      </WorkProjectsWrapper>
    </WorkWrapper>
  );
};

export default Work;
