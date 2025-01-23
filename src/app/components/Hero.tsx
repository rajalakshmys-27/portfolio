"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { GithubIcon, MailIcon, LinkedInIcon, CallIcon } from "@/app/components/Icons";

export default function Hero() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const { isLightMode } = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("+919074089543");
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 3000);
  };

  return (
    <section
      id="home"
      className={`h-screen ${isLightMode ? "bg-white" : "bg-black"} relative`}
      data-reload="0"
    >
      <div className="relative z-10 h-full flex flex-col md:flex-row justify-between items-center px-6 py-40 md:px-12 lg:px-20">
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-3xl md:text-5xl xl:text-6xl lg:text-7xl font-bold leading-tight ${isLightMode ? "text-black" : "text-white"}`}
          >
            Hi, I&apos;m{" "}
            <span
              className={`text-transparent bg-clip-text ${isLightMode
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                : "bg-gradient-to-r from-teal-400 via-green-400 to-lime-400"
                }`}
              style={{
                textShadow: isLightMode
                  ? "2px 2px 4px rgba(0, 0, 0, 0.2)"
                  : "2px 2px 4px rgba(255, 255, 255, 0.2)",
              }}
            >
              Rajalakshmy S
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mt-4 text-sm md:text-1xl lg:text-3xl font-bold ${isLightMode ? "text-gray-700" : "text-[#9b9b9b]"}`}
          >
            MERN Stack Developer | Crafting Scalable Websites
          </motion.p>
          <motion.div
            className="flex gap-6 justify-center md:justify-start mt-4 md:mt-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <a
              href="https://www.linkedin.com/in/rajalakshmy-s-2709/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300">
                <LinkedInIcon />
              </div>
            </a>
            <a
              href="https://github.com/rajalakshmys-27"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
              aria-label="Github Profile"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300">
                <GithubIcon />
              </div>
            </a>
            <a
              href="mailto:rajalakshmys27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
              aria-label="Mail"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition duration-300">
                <MailIcon />
              </div>
            </a>
            <div
              className="group flex items-center justify-center relative cursor-pointer"
              onClick={copyToClipboard}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition duration-300">
                <CallIcon />
              </div>
              {tooltipVisible && (
                <div className={`absolute top-20 lg:top-1/2 lg:left-full lg:ml-2 transform -translate-y-1/2 px-3 py-3 w-max text-xs font-medium ${isLightMode ? "text-white bg-gray-700" : "text-black bg-gray-200"} rounded-lg shadow-lg`}>
                  <span className="block w-full text-center">
                    Copied to clipboard!
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src={isLightMode ? "/assets/background-light.png" : "/assets/background-dark.png"}
            alt="Rajalakshmy"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
