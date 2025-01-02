"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}
      data-reload="0"
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
      ></div>
      <div
        className="relative z-10 h-full flex flex-col justify-end px-6 pb-40 md:px-12 lg:px-24"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-8xl font-bold leading-tight"
        >
          Hi, I&apos;m
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-8xl font-bold leading-tight"
        >
          Rajalakshmy
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-3xl font-bold text-[#9b9b9b]"
        >
          MERN Stack Developer | Crafting Scalable Websites
        </motion.p>
      </div>
    </section>
  );
}
