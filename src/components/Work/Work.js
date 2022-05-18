import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import spoilistPic from "../../img/spoilist.svg";
import quickRPic from "../../img/quickR.svg";
import pocketDexPic from "../../img/pocketDex.svg";
import movieAppPic from "../../img/movieApp.svg";
import {
  WorkWrapper,
  WorkHeaderWrapper,
  WorkProjectsWrapper,
  ProjectContainer,
  ProjectDescriptionOverlay,
} from "./style.js";

const workProjectsAnimation = {
  hidden: { opacity: 0 },
  visible: {
    y: [75, 0],
    opacity: 1,
  },
};

const Work = () => {
  let spoilistUrl = "https://butterysoft.github.io/SpoilistOfficialPage/";
  let quickRUrl = "https://www.youtube.com/watch?v=7HeWyDv62aY";
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
