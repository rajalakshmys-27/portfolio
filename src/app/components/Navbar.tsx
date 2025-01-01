"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isHovered) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false); // Hide navbar on scroll down
        } else {
          setIsVisible(true); // Show navbar on scroll up
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isHovered]);

  const handleMouseEnter = () => {
    // Clear any existing timeout and show navbar
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsHovered(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    // Set a delay before hiding the navbar
    const timeout = setTimeout(() => {
      setIsHovered(false);
      setIsVisible(false);
    }, 1000); // 300ms delay
    setHoverTimeout(timeout);
  };

  return (
    <>
      {/* Invisible hover-trigger area */}
      <div
        className="fixed top-0 left-0 w-full h-6 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: isHovered || isVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 w-full z-40 bg-transparent backdrop-blur-md text-white"
        onMouseEnter={handleMouseEnter} // Keep navbar visible while interacting with it
        onMouseLeave={handleMouseLeave} // Hide with delay after leaving the navbar
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("#home")}
              className="cursor-pointer"
            >
              <Image
                src="/assets/portfolio.png"
                alt="portfolio"
                width={50}
                height={50}
                priority
              />
            </button>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("#about")}
                className="hover:text-gray-300 transition duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("#skills")}
                className="hover:text-gray-300 transition duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("#experience")}
                className="hover:text-gray-300 transition duration-300"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("#projects")}
                className="hover:text-gray-300 transition duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="hover:text-gray-300 transition duration-300"
              >
                Contact
              </button>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
