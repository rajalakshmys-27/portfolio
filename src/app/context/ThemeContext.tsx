"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

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

    const toggleTheme = () => setIsLightMode((prev) => !prev);

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
