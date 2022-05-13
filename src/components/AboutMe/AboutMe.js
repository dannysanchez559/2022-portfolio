import React, { useEffect } from "react";
import styled from "styled-components";
import { default as AboutMePicture } from "../../img/aboutMePicture.svg";
import style from "./style.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMeWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  z-index: 1;

  // Small devices (landscape phones, 350px and up)
  @media (min-width: 350px) {
    flex-direction: column-reverse;
  }
`;

const LeftSideWrapper = styled.div`
  height: 90vh;
  width: 35vw;
  display: flex;
  align-items: center;
  img {
    width: 30em;
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    img {
      width: 37em;
    }
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    img {
      width: 27em;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    img {
      width: 23em;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    img {
      width: 18em;
    }
  }

  // Small devices (landscape phones, 350px and up)
  @media (min-width: 350px) {
    height: auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 17em;
      margin-top: 20px;
    }
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
    rgba(135, 121, 188, 0.8) 91.61%
  );
  box-shadow: -20px 10px 6px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 30px;

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    width: 35vw;
    height: 70vh;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    height: 60vh;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 55vh;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 45vw;
    height: 55vh;
  }

  // Small devices (landscape phones, 350px and up)
  @media (min-width: 350px) {
    width: 90%;
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
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

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    h1 {
      font-size: 3.5em;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 7vh;
    h1 {
      font-size: 2.5em;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    height: 4vh;
    h1 {
      font-size: 2em;
    }
  }

  // Small devices (landscape phones, 350px and up)
  @media (min-width: 350px) {
    text-align: center;
    height: 10vh;
    justify-content: center;
    width: 100%;
    h1 {
      font-size: 2.5em;
    }
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
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    p {
      font-size: 1.8rem;
      margin-top: 50px;
    }
  }
  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    p {
      font-size: 1.4rem;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    p {
      font-size: 1.3rem;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    p {
      font-size: 1.1em;
    }
  }

  // Small devices (landscape phones, 350px and up)
  @media (min-width: 350px) {
    max-width: 100%;
    p {
      font-size: 1.3rem;
      text-align: center;
      line-height: 125%;
    }
  }
`;

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
