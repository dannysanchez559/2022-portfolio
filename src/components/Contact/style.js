import styled from 'styled-components';
import contactMeBackground from '../../img/contactMeBackground.png';

export const ContactPageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: url(${contactMeBackground});
  background-size: 85%;
  background-position-y: 25%;
  background-repeat: no-repeat;
  padding: 0 5vw;

  // tablet
  @media (max-width: 900px) {
    background-size: 100%;
    background-position-x: -3vw;
  }

  // small devices (tablets, 350px and up)
  @media (max-width: 750px) {
    background: none;
    margin-top: 10vh;
  }
`;

export const ContactPageRightSideWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 5vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  justify-content: flex-end;
  width: 45vw;
  height: 85vh;
  margin-top: 5vh;
  overflow-x: hidden;

  // tablet
  // small devices (tablets, 350px and up)
  @media (max-width: 900px) {
    width: 50%;
    height: 50vh;
    margin-top: -20vh;
  }

  // small devices (tablets, 350px and up)
  @media (max-width: 750px) {
    justify-content: center;
    width: 90%;
    height: 60vh;
  }
`;

export const ContactPageHeaderWrapper = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  h1 {
    font-size: 3em;
    font-family: 'Roboto', sans-serif;
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
    height: 7vh;
    h1 {
      font-size: 2em;
    }
  }

  // small devices (tablets, 350px and up)
  @media (max-width: 750px) {
    justify-content: center;
    h1 {
      font-size: 2em;
    }
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 2.5em;
  width: 40vw;
  height: 68vh;
  background-color: rgba(0, 0, 0, 0.4);
  filter: drop-shadow(11px 6px 4px rgba(0, 0, 0, 0.25));

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    justify-content: space-evenly;
    width: 100%;

    input {
      margin: 15px 0 15px 0;
      padding: 5px;
      width: 80%;
      font-size: 1.3rem;
      font-family: 'Raleway', serif;
      font-style: normal;
      font-weight: 400;
      line-height: 35px;
      display: flex;
      text-align: left;
      color: #8a8686;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      border-bottom: 2px solid #8a8686;
    }
    input:focus {
      outline: none;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
    }
    button {
      align-self: flex-end;
      width: 150px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(110, 133, 178, 0.85);
      border: none;
      border-radius: 10px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 500;
      font-size: 1.2em;
      line-height: 28px;
      display: flex;
      align-items: center;
      color: #ffffff;
    }

    button:hover {
      background-color: rgba(90, 113, 158, 0.8);
      cursor: pointer;
    }
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (max-width: 1920px) {
    height: 60vh;
    width: 35vw;
    form {
      padding: 0;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (max-width: 1280px) {
    width: 40vw;
    height: 40vw;
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 900px) {
    width: 45vw;
    height: 45vw;
    form {
      padding: 0px;
      input {
        margin: 0;
      }
      button {
        margin-top: 0;
        height: 40px;
      }
    }
  }

  // small devices (tablets, 350px and up)
  @media (max-width: 750px) {
    width: 90vw;
    height: 40vh;
    padding: 10px;
    margin-top: 10vh;
  }
`;

export const EmailSentMessage = styled.div`
  visibility: hidden;
`;
