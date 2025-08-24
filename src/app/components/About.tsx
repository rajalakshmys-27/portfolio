"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";
import { DownloadIcon, PDFIcon } from "@/app/components/Icons";
import { getExperienceYears } from "@/app/utils/helper";
import "@/app/styles/about.css";
import ResumeLink from "./ResumeLink";

export default function About() {
  const { isLightMode } = useTheme();

  const aboutText =
  {
    heading: "About Me",
    content: [
      {
        "id": 12,
        "text":
          `I am an experienced Front-End Developer with over ${getExperienceYears()} years of expertise in building high-quality, responsive web applications. Proficient in modern technologies like React JS and Next JS. I have delivered impactful solutions, including revamping an airline booking platform and optimizing e-commerce platforms. My full-stack skills in MERN development and backend technologies like Node.js, Express.js, and MongoDB allow me to create scalable, user-centric applications. I am also exploring cloud technologies to enhance application performance and scalability further.`
      },
      {
        "id": 13,
        "text":
          "Adept at problem-solving, collaboration, and adaptability, I take pride in designing secure and efficient APIs using GraphQL and REST while maintaining high code quality with testing frameworks like JEST. My passion for technology drives me to deliver seamless user experiences and continually evolve as a developer."
      },

    ]
  }
    ;
  return (
    <section
      id="about"
      className={clsx("nav-section about-section", {
        "light-mode-section": isLightMode,
        "dark-mode-section": !isLightMode,
      })}
      data-reload="0"
    >
      <div
        className="about-container"
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
          className="about-heading-container"
        >
          <h2 className="about-heading">{aboutText.heading}</h2>
          {aboutText.content.map((item) => (
            <React.Fragment key={item.id}>
              <p>{item.text}</p>
              <br />
            </React.Fragment>
          ))}
          <div className="about-links-wrapper">
            <ResumeLink
              href="/resume.pdf"
              label="Download Resume"
              className="about-download-resume"
              icon={DownloadIcon}
              download={true}
            />
            <ResumeLink
              href="https://docs.google.com/gview?url=https://rajalakshmy-portfolio.vercel.app//resume.pdf&embedded=true"
              label="View Resume"
              className="about-view-resume"
              icon={PDFIcon}
              rel="noopener noreferrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
