"use client"
import React from 'react';
import { useTheme } from "@/app/context/ThemeContext";

const Footer = () => {
    const { isLightMode } = useTheme();
    const year = new Date().getFullYear();

    return (
        <footer className={isLightMode ? 'bg-gray-700' : 'bg-[#1b1b1b] '}>
            <p>© {year} Rajalakshmy S. This website is licensed under the MIT License.</p>
        </footer>
    );
};

export default Footer;
