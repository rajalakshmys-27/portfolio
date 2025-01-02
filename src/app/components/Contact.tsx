"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-black text-white pb-16 flex flex-col md:flex-row items-center justify-evenly gap-12 px-8"
        >
            {/* Left Section */}
            <motion.div
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s work together.</h2>
                <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Image
                        src="/assets/contact.png"
                        alt="Contact Illustration"
                        width={400}
                        height={300}
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                className="flex flex-col items-center md:items-start gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Image
                        src="/assets/symbol.png"
                        alt="Symbol Illustration"
                        width={300}
                        height={300}
                        priority
                    />
                </motion.div>

                <div className="flex flex-col gap-6 text-center md:text-left">
                    {/* Email Address */}
                    <motion.div
                        className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <p className="text-2xl font-semibold text-gray-400">Email Address</p>
                        <p className="text-lg">rajalakshmys27@gmail.com</p>
                    </motion.div>

                    {/* Phone Number */}
                    <motion.div
                        className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <p className="text-2xl font-semibold text-gray-400">Phone Number</p>
                        <p className="text-lg">+91 9074089543</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
