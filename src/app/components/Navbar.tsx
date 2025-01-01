"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white"
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
  );
};

export default Navbar;
