import { motion } from 'framer-motion';
import Timeline from '../Timeline/Timeline';
import './Experience.scss';

const Experience = () => {
  const experienceData = [
    {
      date: '2022 - Present',
      title: 'Senior Full Stack Developer',
      organization: 'Tech Solutions Inc.',
      description: 'Leading development of enterprise-level web applications.',
      achievements: [
        'Architected and implemented microservices architecture',
        'Reduced application load time by 40%',
        'Mentored junior developers'
      ]
    },
    {
      date: '2020 - 2022',
      title: 'Full Stack Developer',
      organization: 'Digital Innovations Ltd.',
      description: 'Developed and maintained multiple client projects.',
      achievements: [
        'Implemented CI/CD pipeline',
        'Developed RESTful APIs',
        'Optimized database queries'
      ]
    },
    {
      date: '2019 - 2020',
      title: 'Junior Developer',
      organization: 'StartUp Hub',
      description: 'Worked on front-end development for various startup projects.',
      achievements: [
        'Built responsive web applications',
        'Integrated third-party APIs',
        'Improved UI/UX design'
      ]
    }
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