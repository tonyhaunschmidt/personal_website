"use client";
import { useState } from "react";

export default function DarkModeToggle({ className }: { className?: string }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      onClick={toggleDarkMode}
      className={`${className} rounded-full h-6 w-9 border-gray-500 border`}
    >
      <div
        className={`relative ${
          darkMode ? "left-3" : "left-0"
        } rounded-full h-full aspect-square bg-primary dark:bg-dprimary ease-in-out duration-300 transition-all`}
      ></div>
    </div>
  );
}
