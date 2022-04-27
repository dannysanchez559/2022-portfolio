import React from "react";
import styled from "styled-components";
import workBackground from "../../img/axiom-pattern.png";

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
`;

const Work = () => {
  return (
    <WorkWrapper>
      <WorkHeaderWrapper>
        <h1>work.</h1>
      </WorkHeaderWrapper>
      <WorkProjectsWrapper>
        <ProjectContainer>Project 1</ProjectContainer>
        <ProjectContainer>Project 2</ProjectContainer>
        <ProjectContainer>Project 3</ProjectContainer>
        <ProjectContainer>Project 4</ProjectContainer>
      </WorkProjectsWrapper>
    </WorkWrapper>
  );
};

export default Work;
