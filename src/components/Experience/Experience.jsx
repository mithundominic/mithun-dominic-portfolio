import { motion } from "framer-motion";
import Timeline from "../Timeline/Timeline";
import "./Experience.scss";

const Experience = () => {
  const experienceData = [
    {
      date: "2021 - Present",
      title: "Front-End Web Developer (React JS)",
      organization: "Classic Informatics Private Limited",
      description: "Leading development of enterprise-level web applications.",
      achievements: [
        {
          project: "Flight/Hotels Booking App",
          details: [
            "Enhanced chatbot functionality (web and PWA) to improve UX, implemented GST features, and optimized NLP for better engagement.",
            "Built dynamic filtering for flights and hotels, reducing search times by 35%.",
            "Led bug fixes and platform improvements, boosting system stability and UX by 15%.",
            "Ensured cross-platform compatibility and seamless functionality through responsive design techniques.",
          ],
        },
        {
          project: "Lead Generation CRM",
          details: [
            "Streamlined campaign and leads modules, reducing campaign creation time by 30%.",
            "Automated workflows, improving lead tracking efficiency by 25%.",
            "Optimized UI, enhancing performance by 15%.",
            "Collaborated with backend teams to enable real-time data flow and improve CRM reliability.",
            "Increased user adoption through intuitive interface enhancements and training.",
          ],
        },
        {
          project: "Timesheet Automation",
          details: [
            "Built and optimized worksheet modules for task management, improving efficiency by 20%.",
            "Delivered responsive designs using Bootstrap and Sass, increasing mobile and tablet usage by 25%.",
            "Improved workflow optimization, ensuring seamless integration with project reporting systems.",
            "Enhanced reporting accuracy and usability with detailed time-tracking analytics.",
          ],
        },
        {
          project: "Ticket IT",
          details: [
            "Designed a ticket management system, reducing issue resolution times by 40%.",
            "Developed advanced search, task prioritization, and RBAC for over 200 users, enhancing security and team efficiency.",
            "Integrated real-time updates and notifications to streamline issue tracking and task assignment.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <Timeline items={experienceData} type="experience" />
    </section>
  );
};

export default Experience;
