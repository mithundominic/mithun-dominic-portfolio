import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../Modal/Modal';
import './Projects.scss';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: 'project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      details: 'Developed a complete e-commerce solution with features like user authentication, product management, and payment integration.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application',
      image: 'project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      details: 'Created a real-time task management system with features like task assignment, progress tracking, and team collaboration.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application',
      image: 'project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      details: 'Created a real-time task management system with features like task assignment, progress tracking, and team collaboration.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application',
      image: 'project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      details: 'Created a real-time task management system with features like task assignment, progress tracking, and team collaboration.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application',
      image: 'project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      details: 'Created a real-time task management system with features like task assignment, progress tracking, and team collaboration.'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
              {/* Add project image here */}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="project-details">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <div className="technologies">
              {selectedProject.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;