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
            <a href="mailto:saurav@example.com">saurav27697@gmail.com</a>
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
            <span>+91 8075195822, +91 9495636567</span>
          </motion.div>
          <motion.div
            className="contact-item"
            initial="hidden"
            animate="visible"
            variants={aboutVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#f9aa33"
                d="M20,0H4C1.79,0,0,1.79,0,4v16c0,2.21,1.79,4,4,4h16c2.21,0,4-1.79,4-4V4C24,1.79,22.21,0,20,0z M7.88,20H5V9h2.88V20z M6.94,7.73c-1.09,0-1.95-0.89-1.95-1.99c0-1.1,0.86-1.99,1.95-1.99c1.08,0,1.94,0.89,1.94,1.99C8.88,6.84,8.02,7.73,6.94,7.73z M21,20h-2.88v-4.97c0-2.37-2.67-2.18-2.67,0V20H13V9h2.45v1.56c0.65-1.22,2.22-1.51,2.22,1.06V20z"
              />
            </svg>

            <span>linkedin.com/in/sauravkoduvalli</span>
          </motion.div>
          <motion.div
            className="contact-item"
            initial="hidden"
            animate="visible"
            variants={aboutVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#f9aa33"
                d="M12,2C7.03,2,3,6.03,3,11c0,3.6,2.44,6.78,6,9.54C9.19,20.34,10.56,21,12,21c1.44,0,2.81-0.66,3.99-1.46 c3.56-2.76,6-5.94,6-9.54C21,6.03,16.97,2,12,2z M12,18.2c-1.24,0-2.39-0.56-3.36-1.49C6.76,14.82,5,12.25,5,11 c0-3.31,2.69-6,6-6s6,2.69,6,6C19,12.25,17.24,14.82,15.36,16.71C14.39,17.64,13.24,18.2,12,18.2z"
              />
              <path
                fill="#f9aa33"
                d="M12,7c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,7,12,7z M12,12c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S12.55,12,12,12z"
              />
            </svg>

            <span>Kochi, India</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
