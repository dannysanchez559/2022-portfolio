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
`;

const Contact = () => {
  return <ContactPageWrapper></ContactPageWrapper>;
};

export default Contact;
