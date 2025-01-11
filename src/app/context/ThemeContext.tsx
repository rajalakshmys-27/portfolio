"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

// Define the context type
interface ThemeContextType {
    isLightMode: boolean;
    toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(false);

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsLightMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("theme", newMode ? "light" : "dark"); // Save user's choice
            return newMode;
        });
    };

    // Detect system theme on initial load
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setIsLightMode(storedTheme === "light");
        } else {
            const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
            setIsLightMode(systemPrefersLight);
        }
    }, []);

    // Listen for changes to system theme
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                setIsLightMode(e.matches); // Update only if user hasn't manually toggled
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
