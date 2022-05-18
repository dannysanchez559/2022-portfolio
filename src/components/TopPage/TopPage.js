import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as ProfilePic } from "../../img/profilePic.svg";
import { motion } from "framer-motion";

const TopPageWrapper = styled.div`
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 auto;
    align-self: center;
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 576px) {
    margin-top: 5vh;
  }
`;

const TopSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 1;
  margin: 7vh 0;
  font-family: "Oxygen", sans-serif;
  font-size: 1.2rem;
  align-items: center;

  // Desktops
  @media (max-width: 1920px) {
    font-size: 1.6rem;
    margin: 15vh 0;
  }

  // Laptops
  @media (max-width: 1280px) {
    margin-bottom: 10vh;
  }

  // Tablets
  @media (max-width: 900px) {
    margin-bottom: 20vh;
    height: auto;
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    height: 80vh;
    width: 80%;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
    z-index: 1;
    margin: 7vh 0;
    font-family: "Oxygen", sans-serif;
    font-size: 1.2rem;
    align-items: center;
  }
`;
const TopPageLeft = styled.div`
  max-width: 40vw;
  max-height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 5vw;

  // Tablets
  @media (max-width: 900px) {
    margin-right: 3vw;
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    max-width: 100%;
    max-height: 60vh;
    flex-direction: column;
    align-items: center;
    margin: 0;
    text-align: center;
  }
`;
const TopPageRight = styled.div`
  max-width: 35vw;
  max-height: 30vw;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: 5vw;

  // Laptops
  @media (max-width: 1280px) {
    height: auto;
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    height: auto;
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4vw;
    margin-bottom: 0;
  }
  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    max-width: 40vw;
    max-height: 40vw;
    justify-content: flex-start;
    align-self: center;
    align-items: center;
    margin: 5vh auto;
  }

  // tablet
  @media (max-width: 900px) {
    margin-top: 10vh;
    justify-self: center;
  }
`;

const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0.2em 0;

  // Large devices (desktops, 992px and up)
  @media (max-width: 1920px) {
    font-size: 2.2em;
  }
  // laptops
  @media (max-width: 1280px) {
    font-size: 2em;
  }
  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    font-size: 1.6em;
  }
  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    font-size: 2.3rem;
  }
`;

const NameHeader = styled(Header)`
  color: #6e85b2;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;
  font-size: 2.9em;

  // Large devices (desktops, 992px and up)
  @media (max-width: 1920px) {
    font-size: 2.5em;
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    font-size: 2em;
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    font-size: 2.1em;
  }
`;

const LearnMoreBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #6e85b2;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: white;
  border-radius: 10px;
  border: none;
  text-decoration: none;
  z-index: 100;

  :hover {
    cursor: pointer;
    background-color: rgba(90, 113, 158, 0.8);
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    visibility: hidden;
  }
`;

const profilePicAnimate = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

const topLeftAnimate = {
  hidden: { opacity: 0.3 },
  visible: {
    x: [-600, 0],
    opacity: 1,
  },
};

const buttonAnimate = {
  hidden: { opacity: 0 },
  visible: {
    y: [250, 0],
    opacity: 1,
  },
};

const TopPage = () => {
  return (
    <TopPageWrapper id="top">
      <TopSectionWrapper>
        <TopPageLeft>
          <motion.div
            initial="hidden"
            variants={topLeftAnimate}
            animate={"visible"}
            transition={{ duration: 0.75, delay: 1.5 }}
          >
            <p>Hello, my name is </p>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={topLeftAnimate}
            animate={"visible"}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <NameHeader>Daniel Sanchez.</NameHeader>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={topLeftAnimate}
            animate={"visible"}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <Header>I create things for the Web.</Header>
          </motion.div>
        </TopPageLeft>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={profilePicAnimate}
        >
          <TopPageRight>
            <ProfilePic style={{ minWidth: "6em", width: "14em" }} />
          </TopPageRight>
        </motion.div>
      </TopSectionWrapper>

      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={400}
        style={{
          padding: "10px 42px",
          zIndex: 100,
        }}
      >
        <motion.div
          initial="hidden"
          variants={buttonAnimate}
          animate={"visible"}
          transition={{ duration: 1.2, delay: 3.5 }}
        >
          <LearnMoreBtn>Learn More</LearnMoreBtn>
        </motion.div>
      </Link>
    </TopPageWrapper>
  );
};

export default TopPage;
