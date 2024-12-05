import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
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
            <a href="mailto:your.email@example.com" className="contact-link">
              <FaEnvelope className="icon" />
              <span>your.email@example.com</span>
            </a>
            <a
              href="https://github.com/yourusername"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
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
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <motion.button
            type="submit"
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
