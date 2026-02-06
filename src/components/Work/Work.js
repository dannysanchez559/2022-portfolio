import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import flowPic from '../../img/flow-img.svg';
import spoilistPic from '../../img/spoilist.svg';
import quickRPic from '../../img/quickR.svg';
import pocketDexPic from '../../img/pocketDex.svg';
import movieAppPic from '../../img/movieApp.svg';
import {
  WorkWrapper,
  WorkHeaderWrapper,
  WorkProjectsWrapper,
  ProjectContainer,
  ProjectDescriptionOverlay,
} from './style.js';

const Work = () => {
  let flowUrl = 'https://www.flowbudgetapp.com';
  let spoilistUrl = 'https://butterysoft.github.io/SpoilistOfficialPage/';
  let quickRUrl = 'https://butterysoft.github.io/QuickR-Landing-Page/';
  let pocketDexUrl = 'https://pocketdex-a45b8.web.app/';
  let movieAppUrl = 'https://reactoads-movie-app-7c45e.web.app/';

  // animation for desktop or mobile
  const isLarge = useMediaQuery('(min-width: 1280px)');

  const workProjectsAnimation = isLarge
    ? {
        hidden: { opacity: 0 },
        visible: {
          y: [75, 0],
          opacity: 1,
        },
      }
    : {
        hidden: { opacity: 0.6 },
        visible: {
          opacity: 1,
        },
      };

  // in view animation
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // custom function for setting media query animations
  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
  }

  return (
    <WorkWrapper id="work">
      <WorkHeaderWrapper>
        <h1>work.</h1>
      </WorkHeaderWrapper>
      <WorkProjectsWrapper>
        <motion.div
          ref={ref}
          animate={controls}
          variants={workProjectsAnimation}
          transition={{ duration: 0.5 }}
        >
          <ProjectContainer>
            <img src={flowPic} alt="flow ios budgeting app" />
            <ProjectDescriptionOverlay>
              <a href={flowUrl} target="_blank" rel="noreferrer">
                <h3>Flow</h3>
                <p>
                  An iOS budgeting app with AI-powered financial insights. Uses
                  Swift, UIKit, Firebase, and Gemini API.
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>

        <motion.div
          ref={ref}
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
                  A native iOS application that helps prevent food spoilage.
                  Reminds you to consume food items before spoilage! Uses Swift,
                  Swift Frameworks, Realm DB.
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>

        <motion.div
          ref={ref}
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
                  A React Native iOS app that allows you to manage, organize,
                  and create QR codes! Uses React Native, Redux, React
                  Frameworks, REST APIs
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>

        <motion.div
          ref={ref}
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
                  look up any pokemon, and their stats. Uses React, React
                  Frameworks, REST APIs
                </p>
              </a>
            </ProjectDescriptionOverlay>
          </ProjectContainer>
        </motion.div>

        <motion.div
          ref={ref}
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
                  look up movie information! Uses React, React Frameworks, REST
                  APIs
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
