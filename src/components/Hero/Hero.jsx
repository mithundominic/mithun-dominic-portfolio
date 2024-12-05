import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm John Doe</h1>
        <h2>Full Stack Developer</h2>
        <p>Turning ideas into reality through code</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          View My Work
        </motion.button>
      </motion.div>
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Add your profile image here */}
      </motion.div>
    </section>
  );
};

export default Hero;