"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import "@/app/styles/experience.css";

const Experiences = () => {
    const { isLightMode } = useTheme();

    const experiences = [
        {
            year: "2024 - Present",
            designation: "Systems Engineer",
            description:
                "Building full-stack applications with Node.js, Express.js, MongoDB, and GraphQL, integrating secure authentication systems. Using Next.js for server-side rendering to create dynamic, high-performance web applications while ensuring robust access control mechanisms.",
        },
        {
            year: "2023 - 2024",
            designation: "Assistant Systems Engineer",
            description:
                "Redesigned an airline booking platform using React.js, Redux Toolkit, and SCSS to deliver a modern user interface. Integrated features like Google OAuth 2.0 and multilingual support to enhance the platform's usability and accessibility.",
        },
        {
            year: "2021 - 2023",
            designation: "Assistant Systems Engineer",
            description:
                "Developed and maintained responsive user interfaces for an e-commerce platform with React.js and LESS. Collaborated on implementing efficient deployment pipelines and ensured consistent cross-browser compatibility for seamless user experiences.",
        },
    ];

    return (
        <section
            id="experience"
            className={clsx("nav-section py-20", {
                "light-mode-section": isLightMode,
                "dark-mode-section": !isLightMode,
            })}
        >
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="experience-heading"
            >
                Experience
            </motion.h2>
            <div className="experience-container">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="basis-3/5 relative"
                >
                    <h3 className="company">
                        Tata Consultancy Services <br className="lg:hidden" />(2021 - Present)
                    </h3>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.8 }}
                                className="timeline-section"
                            >
                                <div className="bulletpoint"></div>
                                <span className="timeline-year">
                                    {exp.year} {"| "}
                                    <span className="timeline-designation">
                                        {exp.designation}
                                    </span>
                                </span>
                                <p
                                    className={clsx("experience-content",
                                        {
                                            "text-gray-950": isLightMode,
                                            "text-gray-300": !isLightMode
                                        })}
                                >
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="basis-2/5"
                >
                    <Image
                        src="/assets/experience.png"
                        alt="Experience Illustration"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg"
                    />
                </motion.div>
            </div>
        </section >
    );
};

export default Experiences;
