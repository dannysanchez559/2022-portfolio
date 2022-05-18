import styled from "styled-components";
import aboutMeBackground from "../../img/aboutMeBackground.svg";

export const MainWrapper = styled.div`
  background-color: #191919;
  color: #fffaf1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: auto;
  overflow-x: hidden;
`;

export const AboutMeBackgroundWrapper = styled.div`
  position: absolute;
  top: 75vh;
  right: 0;
  left: 0;
  background-image: url(${aboutMeBackground});
  background-size: cover;
  width: 100%;
  height: 125vh;

  // Desktops
  @media (max-width: 1920px) {
    top: 70vh;
    height: 130vh;
  }

  // Tablets
  @media (max-width: 900px) {
    background: none;
  }
`;
