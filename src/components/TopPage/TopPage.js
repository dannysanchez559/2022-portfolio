import React from 'react';
import { Link } from 'react-scroll';
import profilePic from '../../img/profilePic.png';
import { motion } from 'framer-motion';
import {
  TopPageWrapper,
  TopSectionWrapper,
  TopPageLeft,
  TopPageRight,
  TopPortraitImg,
  NameHeader,
  Header,
  LearnMoreBtn,
} from './style';

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
            animate={'visible'}
            transition={{ duration: 0.75, delay: 1.5 }}
          >
            <p>Hello, my name is </p>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={topLeftAnimate}
            animate={'visible'}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <NameHeader>Daniel Sanchez.</NameHeader>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={topLeftAnimate}
            animate={'visible'}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <Header>I create software for phones and the web.</Header>
          </motion.div>
        </TopPageLeft>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={profilePicAnimate}
        >
          <TopPageRight>
            <TopPortraitImg src={profilePic} alt="portrait" />
          </TopPageRight>
        </motion.div>
      </TopSectionWrapper>

      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={400}
        style={{
          padding: '10px 42px',
          zIndex: 100,
        }}
      >
        <motion.div
          initial="hidden"
          variants={buttonAnimate}
          animate={'visible'}
          transition={{ duration: 1.2, delay: 3.5 }}
        >
          <LearnMoreBtn>Learn More</LearnMoreBtn>
        </motion.div>
      </Link>
    </TopPageWrapper>
  );
};

export default TopPage;
