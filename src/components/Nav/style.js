import styled from "styled-components";

export const NavWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  a:hover {
    color: rgba(90, 113, 158, 1);
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    margin: 0;
    justify-content: space-evenly;
  }
`;

export const LeftNav = styled.div``;

export const RightNav = styled.div`
  width: 300px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 576px) {
    width: auto;
    justify-content: space-evenly;
    a {
      margin: 0 15px;
    }
  }
`;
