"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { DarkModeIcon, LightModeIcon, MenuIcon } from "@/app/components/Icons";

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
          setIsVisible(false);
        } else {
          setIsVisible(true);
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
        className={`fixed top-0 left-0 w-full z-40 bg-transparent ${isLightMode ? "text-black" : "text-white"} backdrop-blur-md`}
        onMouseEnter={isMobileView ? undefined : handleMouseEnter}
        onMouseLeave={isMobileView ? undefined : handleMouseLeave}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              type="button"
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
            <div className="hidden md:flex space-x-6">
              {["about", "skills", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => scrollToSection(`#${item}`)}
                    className="hover:text-gray-500 transition duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-ful focus:outline-none"
                aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              >
                {isLightMode ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </button>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-ful focus:outline-none"
              aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLightMode ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </button>
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
                aria-label="Toggle main menu"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon />
              </button>
            </div>
          </div>
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
