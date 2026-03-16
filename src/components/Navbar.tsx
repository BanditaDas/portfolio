import React, { useState, useEffect } from "react";
import { Magnetic } from "./Magnetic";
import { LuSunMedium } from "react-icons/lu";
import { IoIosMoon } from "react-icons/io";
import { useTheme } from "../ThemeContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    // Cleanup on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl px-6 py-3 flex justify-between items-center z-50 transition-all duration-300 rounded-full ${scrolled ? "bg-[#f7f7f7]/80 dark:bg-black/20 backdrop-blur-lg border border-black/5 dark:border-white/5 shadow-sm" : "bg-transparent"}`}
    >
      <div className="flex items-end gap-0.75 select-none">
        <span className="text-[clamp(24px,2.4vw,36px)] font-bold tracking-tighter text-black dark:text-white leading-none">
          Bd
        </span>
        <div className="w-2.5 h-2.5 bg-[#F05641] rounded-full mb-1.5" />
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {["Home", "About", "Work", "Contact"].map((item) => (
          <Magnetic key={item}>
            <a
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="relative nav-link text-[clamp(14px,1vw,18px)] font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
            after:bg-black dark:after:bg-white
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item}
            </a>
          </Magnetic>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <LuSunMedium
            className={`w-4 h-4 ${theme === "light" ? "text-black" : "text-gray-500"}`}
          />
          <button
            onClick={toggleTheme}
            className="w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full relative transition-colors duration-300 focus:outline-none"
          >
            <div
              className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${theme === "dark" ? "translate-x-5" : "translate-x-1"}`}
            />
          </button>
          <IoIosMoon
            className={`w-4 h-4 ${theme === "dark" ? "text-white" : "text-gray-500"}`}
          />
        </div>
      </div>
    </nav>
  );
};
