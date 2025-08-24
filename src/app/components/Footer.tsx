"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from "@/app/context/ThemeContext";

const Footer = () => {
    const { isLightMode } = useTheme();
    const [year, setYear] = useState<string>(new Date().getFullYear().toString());

    useEffect(() => {
        // ensure the year is computed on the client and update if needed
        setYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer className={isLightMode ? 'bg-gray-700' : 'bg-[#1b1b1b] '}>
            <p>© <span suppressHydrationWarning>{year}</span> Rajalakshmy S. This website is licensed under the MIT License.</p>
        </footer>
    );
};

export default Footer;
