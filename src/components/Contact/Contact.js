import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./style.js";
import styled from "styled-components";
import contactBackground from "../../img/contactBackground.svg";
import emailjs from "@emailjs/browser";

const ContactPageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: url(${contactBackground});
  background-size: 85%;
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
  justify-content: flex-end;
  width: 45vw;
  height: 85vh;
  margin-top: 5vh;
`;

const ContactPageHeaderWrapper = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  h1 {
    font-size: 3em;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

const ContactFormWrapper = styled.div`
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
      font-family: "Raleway";
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
`;

const EmailSentMessage = styled.div`
  visibility: hidden;
`;

const contactFormAnimation = {
  hidden: { opacity: 0 },
  visible: {
    x: [300, 0],
    opacity: 1,
  },
};

const Contact = () => {
  // in view animation
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <ContactPageWrapper id="contact">
      <ContactPageRightSideWrapper>
        <ContactPageHeaderWrapper>
          <h1>contact.</h1>
        </ContactPageHeaderWrapper>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={contactFormAnimation}
          transition={{ duration: 1.25 }}
        >
          <ContactFormWrapper>
            <ContactUs />
          </ContactFormWrapper>
        </motion.div>
      </ContactPageRightSideWrapper>
    </ContactPageWrapper>
  );
};

// emailjs
export const ContactUs = () => {
  const form = useRef();
  const messageSuccess = "Message successfully sent.";
  const messageFailure = "Message unsuccessful, please try again.";
  let [didMessageSend, setDidMessageSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // clear form
    e.target.reset();

    emailjs
      .sendForm(
        "service_tk9n8nw",
        "contact_form",
        form.current,
        "-Lt-4qZkJVKMT9bk2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(messageSuccess);
          setDidMessageSend(true);
        },
        (error) => {
          console.log(error.text);
          console.log(messageFailure);
          setDidMessageSend(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="name" />
      <input type="email" name="user_email" placeholder="email" />
      <input name="message" placeholder="message" />
      <div>
        {didMessageSend ? (
          <EmailSentMessage style={{ visibility: "visible" }}>
            {messageSuccess}
          </EmailSentMessage>
        ) : (
          <EmailSentMessage style={{ visibility: "hidden" }}>
            {messageFailure}
          </EmailSentMessage>
        )}
        <button type="submit" value="Send">
          submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
