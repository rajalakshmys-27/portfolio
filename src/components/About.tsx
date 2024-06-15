// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const aboutVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial="hidden"
        animate="visible"
        variants={aboutVariants}
        transition={{ duration: 0.5 }}
      >
        <h2>About Me</h2>
        <div className="contact-details">
          <motion.div
            className="contact-item"
            initial="hidden"
            animate="visible"
            variants={aboutVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>Saurav K</span>
          </motion.div>
          <motion.div
            className="contact-item"
            initial="hidden"
            animate="visible"
            variants={aboutVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4H4c-1.11 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
            </svg>
            <a href="mailto:saurav@example.com">saurav@example.com</a>
          </motion.div>
          <motion.div
            className="contact-item"
            initial="hidden"
            animate="visible"
            variants={aboutVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M6.62 10.79C7.06 12.44 8.56 13.94 10.21 14.38l1.43-.32c.29-.07.56-.22.79-.46l2.83-2.83a1.003 1.003 0 0 0-1.42-1.42L11.21 12.2l-1.79-.4c-.44-.1-.78-.44-.88-.88L7.8 8.21a1.003 1.003 0 0 0-1.42 1.42l2.83 2.83c.23.23.39.5.46.79l.32 1.43zm10.92 1.42l-1.43.32c-.29.07-.56.22-.79.46l-2.83 2.83a1.003 1.003 0 0 0 1.42 1.42l1.79-.4c.44-.1.78-.44.88-.88l.4-1.79a1.003 1.003 0 0 0-1.42-1.42l-2.83-2.83a1.003 1.003 0 0 0-1.42 1.42l2.83 2.83c.23.23.39.5.46.79l.32 1.43a1.003 1.003 0 0 0 1.42-1.42l-1.43-.32c-.29-.07-.56-.22-.79-.46l-2.83-2.83a1.003 1.003 0 0 0-1.42 1.42l2.83 2.83c.23.23.39.5.46.79l.32 1.43a1.003 1.003 0 0 0 1.42-1.42z" />
            </svg>
            <span>+91 12345 67890</span>
          </motion.div>
          <motion.div
            className="contact-item"
            initial="hidden"
            animate="visible"
            variants={aboutVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <span>Location: Pune, India</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
