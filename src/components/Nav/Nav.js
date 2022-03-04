import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 1;
`;

const LeftNav = styled.div``;

const RightNav = styled.div`
  width: 300px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <LeftNav>
        <a>Daniel S.</a>
      </LeftNav>
      <RightNav>
        <a>about</a>
        <a>work</a>
        <a>contact</a>
      </RightNav>
    </NavWrapper>
  );
};

export default Nav;
