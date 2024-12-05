import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";
import "./About.scss";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <p>
            {`I'm a passionate Full Stack Developer with expertise in building
            modern web applications. With a strong foundation in both front-end
            and back-end development, I create seamless user experiences that
            solve real-world problems.`}
          </p>
        </motion.div>

        <div className="services">
          <motion.div
            className="service-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FaLaptopCode className="icon" />
            <h3>Frontend Development</h3>
            <p>
              Creating responsive and interactive user interfaces with modern
              frameworks
            </p>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <FaServer className="icon" />
            <h3>Backend Development</h3>
            <p>Building robust server-side applications and RESTful APIs</p>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FaCode className="icon" />
            <h3>Clean Code</h3>
            <p>Writing maintainable, scalable, and well-documented code</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
