import React from "react";
import style from "./style.js";
import styled from "styled-components";
import contactBackground from "../../img/contactBackground.svg";

const ContactPageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  border: 2px solid saddlebrown;
  width: 100%;
  min-height: 100vh;
  background: url(${contactBackground});
  background-size: 80%;
  background-position-y: 25%;
  background-repeat: no-repeat;
  padding: 0 5vw;
`;

const ContactPageRightSideWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 5vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  width: 45vw;
  height: 85vh;
  margin-top: 5vh;
  border: 2px solid green;
`;

const ContactPageHeaderWrapper = styled.div`
  height: 15vh;
  border: 1px solid beige;
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  h1 {
    font-size: 3em;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

const ContactFormWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 3em;
  margin: 0 auto;
  width: 40vw;
  height: 65vh;
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
      font-family: "Raleway", serif;
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
  }
`;

const Contact = () => {
  return (
    <ContactPageWrapper>
      <ContactPageRightSideWrapper>
        <ContactPageHeaderWrapper>
          <h1>contact.</h1>
        </ContactPageHeaderWrapper>
        <ContactFormWrapper>
          <form>
            {/* <label for="name">name</label> */}
            <input type="text" id="name" name="name" placeholder="name"></input>
            <br />
            {/* <label for="email">email</label> */}
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
            ></input>
            <br />
            {/* <label for="message">message</label> */}
            <input
              type="text"
              id="message"
              name="message"
              placeholder="message"
            ></input>
          </form>
        </ContactFormWrapper>
      </ContactPageRightSideWrapper>
    </ContactPageWrapper>
  );
};

export default Contact;
