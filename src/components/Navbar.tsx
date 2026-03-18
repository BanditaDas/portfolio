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
      className={`fixed top-4 min-[2000px]:top-[3vh] left-1/2 -translate-x-1/2 w-[95%] max-w-6xl min-[2000px]:max-w-[60vw] px-4 py-2 lg:px-6 lg:py-3 min-[2000px]:px-[3vw] min-[2000px]:py-[1.5vh] flex justify-between items-center z-50 transition-all duration-300 rounded-full min-[2000px]:rounded-[2vw] ${scrolled ? "bg-[#f7f7f7]/80 dark:bg-black/20 backdrop-blur-lg border border-black/5 dark:border-white/5 shadow-sm" : "bg-transparent"}`}
    >
      <div className="flex items-end gap-0.75 min-[2000px]:gap-[0.5vw] select-none">
        <span className="text-2xl lg:text-[clamp(24px,2.4vw,36px)] min-[2000px]:text-[2vw] font-bold tracking-tighter text-black dark:text-white leading-none">
          Bd
        </span>
        <div className="w-2 h-2 mb-1 lg:w-2.5 lg:h-2.5 lg:mb-1.5 min-[2000px]:w-[0.6vw] min-[2000px]:h-[0.6vw] min-[2000px]:mb-[0.5vh] bg-[#F05641] rounded-full" />
      </div>

      <div className="hidden md:flex gap-6 lg:gap-8 min-[2000px]:gap-[3vw] items-center">
        {["Home", "About", "Work", "Certificates", "Contact"].map((item) => (
          <Magnetic key={item}>
            <a
              href={item === "Home" ? "/#" : `/#${item.toLowerCase()}`}
              className="relative nav-link text-sm lg:text-[clamp(14px,1vw,18px)] min-[2000px]:text-[1vw] font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
            after:bg-black dark:after:bg-white
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item}
            </a>
          </Magnetic>
        ))}
      </div>

      <div className="flex items-center gap-2 lg:gap-4 min-[2000px]:gap-[1.5vw]">
        <div className="flex items-center gap-1.5 lg:gap-2 min-[2000px]:gap-[1vw]">
          <LuSunMedium
            className={`w-3.5 h-3.5 lg:w-4 lg:h-4 min-[2000px]:w-[1.2vw] min-[2000px]:h-[1.2vw] ${theme === "light" ? "text-black" : "text-gray-500"}`}
          />
          <button
            onClick={toggleTheme}
            className="w-9 h-5 lg:w-10 lg:h-5 min-[2000px]:w-[3vw] min-[2000px]:h-[1.5vw] bg-gray-200 dark:bg-gray-700 rounded-full relative transition-colors duration-300 focus:outline-none"
          >
            <div
              className={`w-4 h-4 min-[2000px]:w-[1.1vw] min-[2000px]:h-[1.1vw] bg-white rounded-full absolute top-0.5 left-0.5 min-[2000px]:top-[0.2vw] min-[2000px]:left-[0.2vw] transform transition-transform duration-300 ${theme === "dark" ? "translate-x-4 min-[2000px]:translate-x-[1.5vw]" : ""}`}
            />
          </button>
          <IoIosMoon
            className={`w-3.5 h-3.5 lg:w-4 lg:h-4 min-[2000px]:w-[1.2vw] min-[2000px]:h-[1.2vw] ${theme === "dark" ? "text-white" : "text-gray-500"}`}
          />
        </div>
      </div>
    </nav>
  );
};
