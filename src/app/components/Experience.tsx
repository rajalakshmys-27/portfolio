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
            description:
                "Developed full-stack applications using Node.js, Express.js, MongoDB, and GraphQL. Leveraged Next.js for server-side rendering and secure authentication.",
        },
        {
            year: "2023 - 2024",
            description:
                "Revamped an airline booking platform using React JS, Redux Toolkit, and SCSS. Integrated Google OAuth 2.0 and multilingual support using i18next.",
        },
        {
            year: "2021 - 2023",
            description:
                "Built responsive front-end components for an e-commerce platform using React JS and LESS, improving performance by 30%.",
        },
    ];

    return (
        <section
            id="experience"
            className={`md:min-h-screen py-20 ${isLightMode ? "text-black bg-[#ffffff]" : "text-white bg-[#141414]"}`}
        >
            {/* Heading Section */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
                Experience
            </motion.h2>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-18 flex flex-col md:flex-row gap-5 items-center justify-between">

                {/* Left Section - Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="basis-3/5 relative"
                >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                        Tata Consultancy Services <br className="lg:hidden"/>(2021 - Present)
                    </h3>
                    <div className="relative border-l-2 border-purple-400">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.8 }}
                                className="mb-10 pl-8 relative"
                            >
                                <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-purple-400 border-2 border-white"></div>
                                <span className="block text-lg font-bold text-purple-400 mb-2">
                                    {exp.year}
                                </span>
                                <p
                                    className={`text-sm sm:text-base leading-relaxed ${isLightMode ? "text-gray-950" : "text-gray-300"}`}
                                >
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Section - Image */}
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
        </section>
    );
};

export default Experiences;
