import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";
import "./About.scss";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: <FaLaptopCode className="icon" />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with modern frameworks",
    },
    {
      icon: <FaServer className="icon" />,
      title: "Optimizing Web Performance",
      description:
        "Ensuring fast load times and seamless interactions through efficient coding and resource management",
    },
    {
      icon: <FaCode className="icon" />,
      title: "Progressive Web Applications (PWAs)",
      description:
        "Delivering app-like experiences on the web with cross-platform compatibility",
    },
    {
      icon: <FaCode className="icon" />,
      title: "RESTful APIs",
      description:
        "Integrating robust and efficient backend systems to power modern web applications",
    },
    // {
    //   icon: <FaCode className="icon" />,
    //   title: "Clean Code",
    //   description: "Writing maintainable, scalable, and well-documented code",
    // },
  ];

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
            {`I’m a passionate and skilled Front-End Developer with over 3.2 years of experience specializing in creating high-performance, scalable user interfaces and dynamic single-page applications (SPAs) using React.js, JavaScript, and Redux. With a strong foundation in HTML, CSS, Bootstrap, and Sass, I craft visually appealing and responsive designs tailored for optimal user experiences. I thrive in Agile/Scrum environments, collaborating effectively with cross-functional teams to deliver high-quality solutions. With a keen eye for detail and a user-centric approach, I’m dedicated to enhancing UI/UX, streamlining workflows, and building applications that resonate with end-users. I’m constantly exploring new tools and technologies to stay ahead in the ever-evolving world of front-end development.`}
          </p>
        </motion.div>

        <div className="services">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            >
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
