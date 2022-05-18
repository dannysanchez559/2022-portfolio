import React, { useEffect } from "react";
import { default as AboutMePicture } from "../../img/aboutMePicture.svg";
import {
  AboutContentWrapper,
  AboutHeaderWrapper,
  AboutMeWrapper,
  LeftSideWrapper,
  RightSideWrapper,
} from "./style.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aboutPicAnimation = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

const aboutMeTextAnimation = {
  hidden: { opacity: 0 },
  visible: {
    x: [300, 0],
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

const AboutMe = () => {
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
    <AboutMeWrapper id="about">
      <LeftSideWrapper>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={aboutPicAnimation}
        >
          <img src={AboutMePicture} />
        </motion.div>
      </LeftSideWrapper>
      <RightSideWrapper>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={aboutMeTextAnimation}
        >
          <AboutHeaderWrapper>
            <h1>about me.</h1>
          </AboutHeaderWrapper>
          <AboutContentWrapper>
            <p>
              I focus on the latest and most widely supported Front End mobile
              technologies such as React JS and React Native. I am also
              passionate for clean and elegant UI Design. You can either find me
              working on a coding project, enjoying a nice trail outdoors on my
              Electric Scooter, or enjoying an ice cold Craft Beer on my free
              time. 😁 🛴 🍺
            </p>
          </AboutContentWrapper>
        </motion.div>
      </RightSideWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
