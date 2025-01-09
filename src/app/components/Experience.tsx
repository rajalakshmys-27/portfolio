"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

const Experiences = () => {
    const { isLightMode } = useTheme();

    const experiences = [
        {
            year: "2024 - Present",
            company: "Tata Consultancy Services",
            description:
                "Developed full-stack applications using Node.js, Express.js, and MongoDB, integrating GraphQL APIs for efficient data retrieval. Leveraged Next.js for server-side rendering, boosting SEO and performance while ensuring secure authentication with Passport.js.",
        },
        {
            year: "2023 - 2024",
            company: "Tata Consultancy Services",
            description:
                "Revamped an airline booking platform using React JS, Redux Toolkit, Saga, and SCSS, enhancing user engagement. Integrated Google OAuth 2.0 Single Sign-On and multilingual support using i18next, improving accessibility and ease of use.",
        },
        {
            year: "2021 - 2023",
            company: "Tata Consultancy Services",
            description:
                "Built and maintained responsive front-end components for an e-commerce platform using React JS and LESS, increasing accessibility and improving site performance by 30%.",
        },
    ];

    return (
        <section
            id="experience"
            className={`md:min-h-screen py-2 ${isLightMode ? "text-black bg-[#ffffff]" : "text-white bg-[#141414]"} flex items-center`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-9">
                {/* Heading Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 text-justify"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Experience
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.3,
                                    duration: 0.8,
                                }}
                                className="flex flex-col"
                            >
                                <div>
                                    <span className="text-lg font-bold text-purple-400">
                                        {exp.year}
                                    </span>
                                    <span className={`block text-sm ${isLightMode ? "text-gray-700" : "text-gray-300"} italic`}>
                                        {exp.company}
                                    </span>
                                </div>
                                <p className={`text-sm sm:text-base leading-relaxed ${isLightMode ? "text-gray-950" : "text-gray-300"} `}>
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <Image
                        src="/assets/experience.png"
                        alt="Experience Illustration"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Experiences;
