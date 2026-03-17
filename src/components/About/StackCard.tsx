import React from "react";
import { motion } from "motion/react";

import {
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
  RiNodejsLine,
} from "react-icons/ri";

import { HiDatabase } from "react-icons/hi";
import { GrJava } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { MdAnimation } from "react-icons/md";
import { SiGsap, SiExpress } from "react-icons/si";

const StackCard = () => {
  const stack = [
    { name: "JavaScript", icon: RiJavascriptFill },
    { name: "React JS", icon: RiReactjsLine },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "GSAP", icon: SiGsap },
    { name: "Locomotive JS", icon: MdAnimation },
    { name: "Node", icon: RiNodejsLine },
    { name: "MongoDB", icon: HiDatabase },
    { name: "Express", icon: SiExpress },
    { name: "Java", icon: GrJava },
    { name: "Github", icon: FiGithub },
  ];

  return (
    <div>
      <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-40 mb-2 lg:mb-4 block">
        Stack I use
      </span>

      <div className="flex flex-wrap gap-2 lg:gap-3">
        {stack.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-2 py-1 md:px-4 md:py-2 lg:px-3 lg:py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors cursor-default"
          >
            <tech.icon className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 opacity-60" />
            <span className="text-xs lg:text-sm font-light">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StackCard;
