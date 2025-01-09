"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

const Projects = () => {
  const { isLightMode } = useTheme();

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
    <section id="projects" className={`min-h-screen pt-28 pb-16 ${isLightMode ? "text-black bg-[#ffffff]" : "text-white bg-[#141414]"}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Personal Projects
        </motion.h2>
        <p className={`mb-12 text-base sm:text-lg ${isLightMode ? "text-gray-700" : "text-gray-300"}`}>
          Currently developing a study site, an e-commerce platform, and a task
          management app to showcase expertise in full-stack development,
          real-time data handling, and user-centric design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`${isLightMode ? "bg-gray-200" : "bg-gray-800"} p-4 sm:p-6 rounded-lg shadow-lg flex flex-col justify-between`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                layout="responsive"
                className="rounded-md"
              />
              <div className="mt-4 flex flex-col items-center">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-gray-300 font-semibold text-base sm:text-lg py-2 px-4 sm:px-6 rounded-md hover:bg-gray-500 transition w-full text-center"
                  >
                    {project.title}
                  </a>
                ) : (
                  <div className="relative group w-full">
                    <button className="bg-gray-900 text-gray-300 font-semibold text-base sm:text-lg py-2 px-4 sm:px-6 rounded-md cursor-pointer hover:bg-gray-500 transition w-full">
                      {project.title}
                    </button>
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-200 text-sm px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
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
