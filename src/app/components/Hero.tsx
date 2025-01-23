"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "@/app/context/ThemeContext";
import SocialLinks from "@/app/components/SocialLinks";
import "@/app/styles/hero.css";

export default function Hero() {
  const { isLightMode } = useTheme();

  return (
    <section
      id="home"
      className={clsx("hero-section", {
        "light-mode-bg": isLightMode,
        "dark-mode-bg": !isLightMode
      })}
      data-reload="0"
    >
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={clsx("hero-heading", {
              "light-mode-text": isLightMode,
              "dark-mode-text": !isLightMode
            })}
          >
            Hi, I&apos;m{" "}
            <span
              className={clsx({ "light-mode-gradient": isLightMode, "dark-mode-gradient": !isLightMode })}
            >
              Rajalakshmy S
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={clsx("hero-subtitle", {
              "light-mode-subtitle": isLightMode,
              "dark-mode-subtitle": !isLightMode
            })}
          >
            MERN Stack Developer | Crafting Scalable Websites
          </motion.p>
          <SocialLinks isLightMode={isLightMode} />
        </div>
        <div className="hero-image-container">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src={isLightMode ? "/assets/background-light.png" : "/assets/background-dark.png"}
            alt="Developer"
            className="hero-image"
          />
        </div>
      </div>
    </section >
  );
}
