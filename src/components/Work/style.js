import styled from "styled-components";
import workBackground from "../../img/axiom-pattern.png";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100vh;
  box-sizing: content-box;
  padding: 0 5vw;
  margin: 0;
  background-image: url(${workBackground});
  background-repeat: repeat;

  // small devices
  @media (max-width: 500px) {
    margin-top: 10vh;
    padding-top: 10vh;
  }
`;

export const WorkHeaderWrapper = styled.div`
  height: 15vh;
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

  // XX-Large devices (larger desktops, 1400px and up)
  @media (max-width: 1920px) {
    h1 {
      font-size: 3.5em;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (max-width: 1280px) {
    h1 {
      font-size: 2.5em;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    margin: 7vh 5vw;

    h1 {
      font-size: 2em;
    }
  }

  // small devices
  @media (max-width: 500px) {
    height: 5vh;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 40px;
    h1 {
      font-size: 2em;
    }
  }
`;

export const WorkProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: content-box;
  height: auto;
  width: 100%;
  margin: 0 5vw;

  // Large devices (desktops, 992px and up)
  @media (max-width: 1280px) {
    justify-content: space-between;
    align-items: center;
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    justify-content: space-evenly;
  }

  // small devices (tablets, 350px and up)
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const ProjectDescriptionOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 325px;
  height: 175px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  opacity: 0;
  color: white;
  border-radius: 0 0 25px 25px;
  transition: 0.25s ease-in;

  a {
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    color: inherit;
    text-decoration: inherit;
    cursor: inherit;
  }

  h3 {
    margin: 0;
    font-size: 1.4em;
    font-family: "Roboto", serif;
  }

  p {
    margin: 10px;
    font-family: "Raleway", serif;
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    width: 300px;
    height: 160px;
  }
`;

export const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 325px;
  height: 250px;
  border-radius: 25px;
  margin-bottom: 5em;

  img {
    border-radius: 25px;
    transition: 0.2s ease-in;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:hover ${ProjectDescriptionOverlay} {
    opacity: 1;
    cursor: pointer;
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    width: 300px;
    height: 225px;
  }

  // small devices
  @media (max-width: 500px) {
    margin: 15px;
  }
`;
