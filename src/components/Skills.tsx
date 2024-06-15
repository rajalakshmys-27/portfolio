// src/components/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Flutter",
  "Dart",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Git",
  "Docker",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-pill"
            key={index}
            initial="hidden"
            animate="visible"
            variants={pillVariants}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
