// src/components/Education.tsx
import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="timeline">
        <motion.div
          className="timeline-item"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          <h3>Indian Institute of Technology</h3>
          <p>Bachelor of Technology in Computer Science (2017 - 2021)</p>
          <p>Graduated with Honors, GPA: 8.5/10</p>
        </motion.div>
        <motion.div
          className="timeline-item"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>St. Xavier's Senior Secondary School</h3>
          <p>Higher Secondary Education (2015 - 2017)</p>
          <p>Scored 95% in CBSE Board Exams</p>
        </motion.div>
        <motion.div
          className="timeline-item"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Little Flower School</h3>
          <p>Secondary Education (2013 - 2015)</p>
          <p>Scored 93% in CBSE Board Exams</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
