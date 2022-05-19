import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  z-index: 1;

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

export const LeftSideWrapper = styled.div`
  height: 90vh;
  width: 35vw;
  display: flex;
  align-items: center;
  img {
    width: 30em;
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (max-width: 1920px) {
    img {
      width: 37em;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (max-width: 1500px) {
    img {
      width: 29em;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    img {
      width: 20em;
    }
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    height: auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 20em;
      margin-top: 20px;
    }
  }
`;

export const RightSideWrapper = styled.div`
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
  @media (max-width: 1920px) {
    width: 35vw;
    height: 70vh;
  }

  // Large devices (desktops, 992px and up)
  @media (max-width: 1500px) {
    height: 60vh;
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    width: 45vw;
    height: 35vh;
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    width: 90%;
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const AboutHeaderWrapper = styled.div`
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
  @media (max-width: 1920px) {
    h1 {
      font-size: 3.5em;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (max-width: 1280px) {
    height: 7vh;
    h1 {
      font-size: 2.5em;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    height: 4vh;
    h1 {
      font-size: 2em;
    }
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    text-align: center;
    height: 10vh;
    justify-content: center;
    width: 100%;
    h1 {
      font-size: 2.5em;
    }
  }
`;

export const AboutContentWrapper = styled.div`
  max-width: 35vw;
  p {
    font-size: 1.6rem;
    text-align: right;
    font-family: "Raleway", sans-serif;
    line-height: 125%;
    font-weight: 400;
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (max-width: 1920px) {
    p {
      font-size: 1.8rem;
      margin-top: 50px;
    }
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (max-width: 1500px) {
    p {
      font-size: 1.4rem;
      margin-top: 20px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    p {
      font-size: 1.2em;
    }
  }

  // Small devices (landscape phones, 350px and up)
  @media (max-width: 500px) {
    max-width: 100%;
    p {
      font-size: 1.3rem;
      text-align: center;
      line-height: 125%;
      padding: 0 10px;
    }
  }
`;
