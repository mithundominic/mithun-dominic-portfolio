import { motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Agile', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;