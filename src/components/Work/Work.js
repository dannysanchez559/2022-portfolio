import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  height: auto;
  min-height: 100vh;
  box-sizing: content-box;
  padding: 0 5vw;
  margin: 0;
  background-image: url(${workBackground});
  background-repeat: repeat;
`;

const WorkHeaderWrapper = styled.div`
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
  @media (min-width: 1400px) {
    h1 {
      font-size: 3.5em;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    h1 {
      font-size: 2.5em;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    margin: 7vh 5vw;

    h1 {
      font-size: 2em;
    }
  }

  // small devices
  @media (min-width: 350px) {
    height: 5vh;
    justify-content: center;

    h1 {
      font-size: 2em;
    }
  }
`;

const WorkProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: content-box;
  height: auto;
  width: 100%;
  margin: 0 5vw;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    justify-content: space-evenly;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }

  // small devices (tablets, 350px and up)
  @media (min-width: 350px) {
    justify-content: space-evenly;
  }
`;

const ProjectDescriptionOverlay = styled.div`
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
  @media (min-width: 768px) {
    width: 300px;
    height: 160px;
  }
`;

const ProjectContainer = styled.div`
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
  @media (min-width: 768px) {
    width: 300px;
    height: 225px;
  }
`;

const workProjectsAnimation = {
  hidden: { opacity: 0 },
  visible: {
    y: [100, 0],
    opacity: 1,
  },
};

const Work = () => {
  let spoilistUrl = "https://butterysoft.github.io/SpoilistOfficialPage/";
  let quickRUrl =
    "https://www.figma.com/file/tEw5kXNStnUUHyHbNuItls/QR-Wallet?node-id=0%3A1";
  let pocketDexUrl = "https://pocketdex-a45b8.web.app/";
  let movieAppUrl = "https://reactoads-movie-app-7c45e.web.app/";

  // in view animation
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <WorkWrapper id="work">
      <WorkHeaderWrapper>
        <h1>work.</h1>
      </WorkHeaderWrapper>
      <WorkProjectsWrapper>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={workProjectsAnimation}
          transition={{ duration: 0.5 }}
        >
          <ProjectContainer>
            <img src={spoilistPic} alt="spoilist ios app" />
            <ProjectDescriptionOverlay>
              <a href={spoilistUrl} target="_blank" rel="noreferrer">
                <h3>Spoilist</h3>
                <p>
                  A native iOS application that helps prevent food spoilage. Add
                  alerts for food items to remind you to consume them before
                  spoilage!
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={workProjectsAnimation}
          transition={{ duration: 0.75 }}
        >
          <ProjectContainer>
            <img src={quickRPic} alt="quickR mobile app" />
            <ProjectDescriptionOverlay>
              <a href={quickRUrl} target="_blank" rel="noreferrer">
                <h3>QuickR</h3>
                <p>
                  A mobile application for both Android and iOS that allows you
                  to manage, organize, and create QR codes!
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={workProjectsAnimation}
          transition={{ duration: 1 }}
        >
          <ProjectContainer>
            <img src={pocketDexPic} alt="pocketDex web app" />
            <ProjectDescriptionOverlay>
              <a href={pocketDexUrl} target="_blank" rel="noreferrer">
                <h3>PocketDex</h3>
                <p>
                  A Mobile friendly Web based application that allows users to
                  look up any pokemon, and their stats.
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={workProjectsAnimation}
          transition={{ duration: 1.25 }}
        >
          <ProjectContainer>
            <img src={movieAppPic} alt="Reactoads Movie web app" />
            <ProjectDescriptionOverlay>
              <a href={movieAppUrl} target="_blank" rel="noreferrer">
                <h3>Reactoads MovieApp</h3>
                <p>
                  A Mobile friendly Web based application that allows users to
                  look up movie information!
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>
      </WorkProjectsWrapper>
    </WorkWrapper>
  );
};

export default Work;
