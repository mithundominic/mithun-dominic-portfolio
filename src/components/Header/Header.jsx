import { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <h1>John Doe</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div 
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.header>
  );
};

export default Header;