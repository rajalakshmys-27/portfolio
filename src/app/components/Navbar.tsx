"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const { isLightMode, toggleTheme } = useTheme();

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isHovered && !isMobileView) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false); // Hide navbar on scroll down
        } else {
          setIsVisible(true); // Show navbar on scroll up
        }
      }

      setLastScrollY(currentScrollY);
    };

    updateView();
    window.addEventListener("resize", updateView);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateView);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isHovered, isMobileView]);

  const handleMouseEnter = () => {
    if (isMobileView) return;
    setIsHovered(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (isMobileView) return;
    setIsHovered(false);
    setIsVisible(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {!isMobileView && (
        <div
          className="fixed top-0 left-0 w-full h-6 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      )}

      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: isHovered || isVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={`fixed top-0 left-0 w-full z-40 bg-transparent ${isLightMode ? "text-black" : "text-white"
          } backdrop-blur-md`}
        onMouseEnter={isMobileView ? undefined : handleMouseEnter}
        onMouseLeave={isMobileView ? undefined : handleMouseLeave}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="cursor-pointer"
            >
              <Image
                src={isLightMode ? "/assets/portfolio-dark.png" : "/assets/portfolio-light.png"}
                alt="portfolio"
                width={50}
                height={50}
                priority
              />
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
              {["about", "skills", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(`#${item}`)}
                    className="hover:text-gray-500 transition duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-ful focus:outline-none"
              >
                {isLightMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>


                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                )}
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-ful focus:outline-none"
            >
              {isLightMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>


              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
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


          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 px-4 pt-4 pb-4">
                {["about", "skills", "experience", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(`#${item}`);
                        setIsMenuOpen(false);
                      }}
                      className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-500 hover:bg-gray-100"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
