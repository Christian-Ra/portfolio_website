import "./Contact.scss";
import shake from "../../assets/shake.svg";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // setMessage(true);

    emailjs
      .sendForm(
        "service_bszqaco",
        "template_2akamzs",
        formRef.current,
        "Rut9RFORTY9fNuIQv",
      )
      .then(
        () => {
          setMessage(true);
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again", error.text);
          console.log(error.text);
        },
      );
    // Handle form submission logic here
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="shake" />
      </div>
      <div className="right">
        <h2>Get in Touch!</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input type="subject" name="subject" placeholder="Subject" />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your message, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  );
}
