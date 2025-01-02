"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "LastMinRef - a Study Site",
      image: "/assets/studysite.png",
      description: "A study site showcasing full-stack expertise.",
      link: "https://lastminref.netlify.app/",
      status: "Live",
    },
    {
      title: "E-commerce platform",
      image: "/assets/ecommerce.png",
      description: "An e-commerce platform focused on user experience.",
      link: null,
      status: "Under Development",
    },
    {
      title: "Task Management App",
      image: "/assets/taskmanagement.png",
      description: "A task management app for real-time data handling.",
      link: null,
      status: "Under Development",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white text-black py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Personal Projects
        </motion.h2>
        <p className="text-gray-600 mb-12 text-lg">
          Currently developing a study site, an e-commerce platform, and a task
          management app to showcase expertise in full-stack development,
          real-time data handling, and user-centric design.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="max-w-xs"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="rounded-md"
              />
              <div className="relative mt-4">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white font-semibold text-lg py-4 px-4 rounded-md hover:bg-gray-800 transition"
                  >
                    {project.title}
                  </a>
                ) : (
                  <div className="relative group">
                    <button className="bg-black text-white font-semibold text-lg py-3 px-4 rounded-md cursor-pointer hover:bg-gray-800 transition">
                      {project.title}
                    </button>
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      {project.status}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
