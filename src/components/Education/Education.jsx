import { motion } from "framer-motion";
import Timeline from "../Timeline/Timeline";
import "./Education.scss";

const Education = () => {
  const educationData = [
    {
      date: "2016 - 2020",
      title: "Bachelor of Engineering",
      organization: "SDM Institute of Technology, Ujire",
      description: "Specialized in Electronics and Communication Engineering.",
    },
    {
      date: "2015 - 2016",
      title: "Intermediate (Class XII)",
      organization: "SDM PU College, Ujire",
    },
    {
      date: "2013 - 2014",
      title: "Matriculation (Class X)",
      organization: "SDM CBSE School, Ujire",
    },
  ];

  return (
    <section id="education" className="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <Timeline items={educationData} type="education" />
    </section>
  );
};

export default Education;
