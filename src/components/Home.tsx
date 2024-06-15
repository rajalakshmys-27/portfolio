// src/components/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Saurav K
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Mobile Application Developer
      </motion.h2>
      <motion.a
        href="/resume.pdf"
        download="Saurav_K_Resume.pdf"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Download My Resume
      </motion.a>
    </section>
  );
};

export default Home;
