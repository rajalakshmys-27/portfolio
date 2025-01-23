"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";
import { DownloadIcon, PDFIcon } from "@/app/components/Icons";

export default function About() {
  const { isLightMode } = useTheme();
  return (
    <section
      id="about"
      className={`md:min-h-screen py-20  ${isLightMode ? "text-black bg-[#ffffff]" : "text-white bg-[#141414]"} flex items-center`}
      data-reload="0"
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <Image
            src="/assets/developer.png"
            alt="Developer working illustration"
            width={600}
            height={600}
            priority
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-justify"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p>
            I am an experienced Front-End Developer with over 3.5 years of expertise in building high-quality, responsive web applications. Proficient in modern technologies like React JS and Next JS. I have delivered impactful solutions, including revamping an airline booking platform and optimizing e-commerce platforms. My full-stack skills in MERN development and backend technologies like Node.js, Express.js, and MongoDB allow me to create scalable, user-centric applications. I am also exploring cloud technologies to enhance application performance and scalability further.
          </p>
          <br />
          <p>
            Adept at problem-solving, collaboration, and adaptability, I take pride in designing secure and efficient APIs using GraphQL and REST while maintaining high code quality with testing frameworks like JEST. My passion for technology drives me to deliver seamless user experiences and continually evolve as a developer.
          </p>
          <br />
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-md"
              aria-label="Download Resume"
            >
              Download Resume
              <DownloadIcon />
            </motion.a>
            <motion.a
              href="https://docs.google.com/gview?url=https://rajalakshmy-portfolio.vercel.app//resume.pdf&embedded=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-md"
              aria-label="View Resume"
            >
              View Resume
              <PDFIcon />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
