import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
