import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const YOUR_SERVICE_ID = "service_6y6cn6r";
const YOUR_TEMPLATE_ID = "template_ahxbi3h";
const YOUR_PUBLIC_KEY = "ZfKJ_Kx5Ka_zrQvYK";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        formRef.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>{`Let's Connect`}</h3>
          <p>
            {`I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.`}
          </p>

          <div className="contact-links">
            <a href="mailto:mithundmnc934@gmail.comm" className="contact-link">
              <FaEnvelope className="icon" />
              <span>mithundmnc934@gmail.com</span>
            </a>
            <a
              href="https://github.com/mithundominic"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mithun-dominic"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            value="Send"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
