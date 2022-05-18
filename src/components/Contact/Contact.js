import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ContactPageWrapper,
  ContactPageRightSideWrapper,
  ContactPageHeaderWrapper,
  ContactFormWrapper,
  EmailSentMessage,
} from "./style.js";
import emailjs from "@emailjs/browser";

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
