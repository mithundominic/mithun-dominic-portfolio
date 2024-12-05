import { motion } from 'framer-motion';
import Timeline from '../Timeline/Timeline';
import './Education.scss';

const Education = () => {
  const educationData = [
    {
      date: '2018 - 2022',
      title: 'Bachelor of Computer Science',
      organization: 'University of Technology',
      description: 'Graduated with First Class Honours. Specialized in Software Engineering and Artificial Intelligence.',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Led the University Programming Club',
        'Completed thesis on Machine Learning Applications'
      ]
    },
    {
      date: '2016 - 2018',
      title: 'Associate Degree in Computer Science',
      organization: 'Community College',
      description: 'Foundation studies in Computer Science with focus on programming fundamentals.',
      achievements: [
        'Perfect GPA in Programming courses',
        'Received Merit Scholarship',
        'Participated in National Coding Competition'
      ]
    }
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