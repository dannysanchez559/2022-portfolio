import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ContactPageWrapper,
  ContactPageRightSideWrapper,
  ContactPageHeaderWrapper,
  ContactFormWrapper,
  EmailSentMessage,
  ContactFooterWrapper,
  ContactFooterText,
  ContactFooterLinks,
  ContactFooterLink,
  ContactFooterIcon,
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
          <ContactFooter />
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

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init("-Lt-4qZkJVKMT9bk2");
  }, []);

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
          console.error("EmailJS error:", error);
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

// Footer component with social links
const ContactFooter = () => {
  const linkedInUrl = "https://www.linkedin.com/in/dannysanchez559/";
  const upworkUrl = "https://www.upwork.com/freelancers/dannydev";

  return (
    <ContactFooterWrapper>
      <ContactFooterText>Find me on LinkedIn and Upwork</ContactFooterText>
      <ContactFooterLinks>
        <ContactFooterLink
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <ContactFooterIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </ContactFooterIcon>
        </ContactFooterLink>
        <ContactFooterLink
          href={upworkUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Upwork Profile"
        >
          <ContactFooterIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.406 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>
          </ContactFooterIcon>
        </ContactFooterLink>
      </ContactFooterLinks>
    </ContactFooterWrapper>
  );
};

export default Contact;
