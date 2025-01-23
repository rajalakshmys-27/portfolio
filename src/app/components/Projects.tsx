"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import "@/app/styles/projects.css";

const Projects = () => {
  const { isLightMode } = useTheme();

  const sectionContent = {
    heading: "Personal Projects",
    description: "Currently developing a study site, an e-commerce platform, and a task management app to showcase expertise in full- stack development, real-time data handling, and user-centric design."
  }

  const projects = [
    {
      title: "LastMinRef - a Study Site",
      image: "/assets/studysite.png",
      description: "A study site showcasing full-stack expertise.",
      link: "https://lastminref.netlify.app/",
      status: "View my Progress",
    },
    {
      title: "E-commerce platform",
      image: "/assets/ecommerce.png",
      description: "An e-commerce platform focused on user experience.",
      link: null,
      status: "Coming Soon",
    },
    {
      title: "Task Management App",
      image: "/assets/taskmanagement.png",
      description: "A task management app for real-time data handling.",
      link: null,
      status: "Coming Soon",
    },
  ];

  return (
    <section
      id="projects"
      className={clsx("nav-section project-section", {
        "light-mode-section": isLightMode,
        "dark-mode-section": !isLightMode
      })}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="project-container"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="project-heading"
        >
          {sectionContent.heading}
        </motion.h2>
        <p className={clsx("project-description", {
          "text-gray-700": isLightMode,
          "text-gray-300": !isLightMode
        })}>
          {sectionContent.description}
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={clsx("project-card", {
                "bg-gray-200": isLightMode,
                "bg-gray-800": !isLightMode
              })}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
              {!project.link && project.status === "Coming Soon" && (
                <div className="overlay">
                  <span className="overlay-text">{project.status}</span>
                </div>
              )}
              <div className="project-card-container group">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button hover:bg-gray-500"
                  >
                    {project.title}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="project-button cursor-not-allowed"
                    disabled>
                    {project.title}
                  </button>
                )}
                {project.link && (
                  <div className="tooltip">
                    {project.status}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div >
    </section >
  );
};

export default Projects;
