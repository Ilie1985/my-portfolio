import React from "react";
import "./contacts.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59xn88k",
        "template_puy76li",
        form.current,
        "IQ4O58jrMvURmeFwe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="icon" />
            <h4>Email</h4>
            <h5>iliemarian32@gmail.com</h5>
            <a href="mailto:iliemarian32@gmail.com">Send me a message </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="icon" />
            <h4>Messenger</h4>
            <h5>Marian Ilie</h5>
            <a href="https://m.me/ilie.marian32">Send me a message </a>
          </article>

          <article className="contact_option">
            <RiWhatsappLine className="icon" />
            <h4>Whatsapp</h4>
            <h5>Contact me on whatsapp</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+44077671403334"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
        </div>
        {/* Contact_options div ends here */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Please enter your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Please enter your message"
            required
          ></textarea>
          <button className="button button-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
