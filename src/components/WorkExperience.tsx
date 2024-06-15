// src/components/WorkExperience.tsx
import React from "react";
import { motion } from "framer-motion";
import "./WorkExperience.css";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="work-experience-section">
      <h2>Work Experience</h2>
      <div className="cards-container">
        <motion.div
          className="card"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <h3>Systems Engineer at Tata Consultancy Services</h3>
          <p>
            Developed and deployed cross-platform applications... (more details
            from your resume)
          </p>
        </motion.div>
        <motion.div
          className="card"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Flutter Developer at AS Designs</h3>
          <p>
            Led the development of an e-commerce app... (more details from your
            resume)
          </p>
        </motion.div>
        <motion.div
          className="card"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Software Developer at Techtern Private Limited</h3>
          <p>
            Worked on an agricultural project... (more details from your resume)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
