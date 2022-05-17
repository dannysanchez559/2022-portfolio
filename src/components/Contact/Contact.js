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

  // small devices (tablets, 350px and up)
  @media (max-width: 576px) {
    background: none;
  }
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
  overflow-x: hidden;

  // small devices (tablets, 350px and up)
  @media (max-width: 576px) {
    justify-content: center;
    width: 90%;
    height: 75vh;
  }
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
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    h1 {
      font-size: 3.5em;
    }
  }
  // Large devices (desktops, 992px and up)
  @media (max-width: 1200px) {
    height: 7vh;
    h1 {
      font-size: 2.5em;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 992px) {
    height: 7vh;
    h1 {
      font-size: 2em;
    }
  }

  // small devices (tablets, 350px and up)
  @media (max-width: 576px) {
    justify-content: center;
    h1 {
      font-size: 2em;
    }
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

  // X-Large devices (large desktops, 1200px and up)
  @media (max-width: 1400px) {
    height: 60vh;
    form {
      padding: 0;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (max-width: 1200px) {
    width: 45vw;
    height: 45vw;
  }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 992px) {
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
  @media (max-width: 576px) {
    width: 100%;
    height: auto;
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

const SubmitFormButton = () => {
  return (
    <button type="submit" value="Send">
      submit
    </button>
  );
};

// emailjs
export const ContactUs = () => {
  const form = useRef();
  const messageSuccess = "Message successfully sent.";
  const messageFailure = "Message unsuccessful, please try again.";
  let [contactFormCompletionMessage, setContactFormCompletionMessage] =
    useState("");
  let [userAttemptedFormSend, setUserAttemptedFormSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setUserAttemptedFormSend(true);

    console.log(e.target[0].value);
    let field = e.target;

    let formName = field[0].value;
    let formEmail = field[1].value;
    let formMessage = field[2].value;

    // form validation for empty fields
    if (formName === "" || formEmail === "" || formMessage === "") {
      setContactFormCompletionMessage(messageFailure);
      return;
    }

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
          setContactFormCompletionMessage(messageSuccess);
        },
        (error) => {
          console.log(error.text);
          console.log(messageFailure);
          setContactFormCompletionMessage(messageFailure);
        }
      );

    // clear form
    e.target.reset();
    // hide messageCompletion
    setTimeout(() => {
      setUserAttemptedFormSend(false);
    }, 5000);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="name" />
      <input type="email" name="user_email" placeholder="email" />
      <input name="message" placeholder="message" />
      <div>
        <EmailSentMessage
          style={
            userAttemptedFormSend
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {contactFormCompletionMessage}
        </EmailSentMessage>

        <SubmitFormButton />
      </div>
    </form>
  );
};

export default Contact;
