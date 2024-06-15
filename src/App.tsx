// src/App.tsx
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles.css"; // Import global styles
import About from "./components/About";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
