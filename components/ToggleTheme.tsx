"use client";

import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      document.body.classList.toggle("light", newTheme === "light");
      document.body.classList.toggle("dark", newTheme === "dark");

      console.log("Current classes:", document.body.classList); // log class list
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="theme-toggle-button bg-offwhite text-black transition-colors duration-700 hover:text-y2kpinkhover dark:bg-black dark:text-offwhite"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />}
      </button>
    </div>
  );
};

export default ToggleTheme;
