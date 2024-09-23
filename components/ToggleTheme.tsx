"use client";

import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  const toggleTheme = (): void => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  if (darkMode === null) return null;

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button bg-offwhite text-black transition-colors duration-700 hover:text-y2kpinkhover dark:bg-black dark:text-offwhite"
      aria-label="Toggle Theme"
    >
      {darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
};

export default ToggleTheme;