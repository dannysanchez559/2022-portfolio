import React from "react";
import styled from "styled-components";
import { ReactComponent as ProfilePic } from "../../img/profilePic.svg";

const TopPageWrapper = styled.div`
  border: 2px dashed blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10vh 12vw;
`;
const TopPageLeft = styled.div`
  border: 3px solid pink;
`;
const TopPageRight = styled.div`
  border: 3px solid yellow;
`;

const NameHeader = styled.h1`
  font-size: 3em;
  color: red;
`;

const TopPage = () => {
  return (
    <TopPageWrapper>
      <TopPageLeft>
        <p>Hello, my name is </p>
        <NameHeader>Daniel Sanchez.</NameHeader>
        <h1>I create things for the Web.</h1>
      </TopPageLeft>

      <TopPageRight>
        <ProfilePic />
      </TopPageRight>
    </TopPageWrapper>
  );
};

export default TopPage;
