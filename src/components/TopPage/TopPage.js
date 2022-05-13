import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as ProfilePic } from "../../img/profilePic.svg";

const TopPageWrapper = styled.div`
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 0 auto;
    align-self: center;
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
`;
const TopPageLeft = styled.div`
  max-width: 35vw;
  max-height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TopPageRight = styled.div`
  max-width: 35vw;
  max-height: 30vw;
  display: flex;
  justify-content: center;
  align-items: top;
`;

const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0.2em 0;
`;

const NameHeader = styled(Header)`
  color: #6e85b2;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;
  font-size: 2.9em;
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

  :hover {
    cursor: pointer;
    background-color: rgba(90, 113, 158, 0.8);
  }
`;

const TopPage = () => {
  return (
    <TopPageWrapper id="top">
      <TopSectionWrapper>
        <TopPageLeft>
          <p>Hello, my name is </p>
          <NameHeader>Daniel Sanchez.</NameHeader>
          <Header>I create things for the Web.</Header>
        </TopPageLeft>

        <TopPageRight>
          <ProfilePic style={{ width: "16em" }} />
        </TopPageRight>
      </TopSectionWrapper>

      <LearnMoreBtn>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={400}
          style={{
            padding: "10px 42px",
            cursor: "pointer",
          }}
        >
          Learn More
        </Link>
      </LearnMoreBtn>
    </TopPageWrapper>
  );
};

export default TopPage;
