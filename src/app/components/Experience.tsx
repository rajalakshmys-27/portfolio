"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Experiences = () => {
    const experiences = [
        {
            year: "2021 - 2023",
            description:
                "Built and maintained responsive front-end components for an e-commerce platform using React JS, LESS, and REST APIs, improving performance.",
        },
        {
            year: "2023 - 2024",
            description:
                "Revamped an airline booking platform using React, Redux Toolkit, Saga, TypeScript, and SCSS, enhancing user experience.",
        },
        {
            year: "2024 - present",
            description:
                "Developed full-stack applications using Next JS, Node JS, Express, and MongoDB, integrating secure GraphQL APIs.",
        },
    ];

    return (
        <section id="experience" className="min-h-screen bg-black text-white py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-6xl mx-auto px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-4xl md:text-5xl font-bold mb-12"
                >
                    Experience
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <Image
                            src="/assets/experience.png"
                            alt="Experience Illustration"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </motion.div>

                    {/* Right Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.8 }}
                                className="flex flex-col md:flex-row gap-4"
                            >
                                <span className="text-lg font-semibold text-gray-400 md:w-1/3">
                                    {exp.year}
                                </span>
                                <p className="text-base leading-relaxed md:w-2/3">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experiences;
