// src/components/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Me</h2>
        <form className="contact-form">
          <motion.input
            type="text"
            placeholder="Your Name"
            initial="hidden"
            animate="visible"
            variants={formVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            initial="hidden"
            animate="visible"
            variants={formVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows={5}
            initial="hidden"
            animate="visible"
            variants={formVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.button
            type="submit"
            initial="hidden"
            animate="visible"
            variants={formVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
