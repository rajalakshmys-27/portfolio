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
        <section id="experience" className="bg-black text-white py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center md:text-left"
                >
                    Experience
                </motion.h2>
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-start"
                    >
                        <Image
                            src="/assets/experience.png"
                            alt="Experience Illustration"
                            width={500}
                            height={500}
                            className="rounded-lg"
                            priority
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
                                className="flex flex-col gap-4 md:flex-row"
                            >
                                <span className="text-base sm:text-lg font-semibold text-gray-400 md:w-1/3 text-center md:text-left">
                                    {exp.year}
                                </span>
                                <p className="text-sm sm:text-base leading-relaxed md:w-2/3 text-center md:text-left">
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
