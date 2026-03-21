import React from "react";
import { motion } from "motion/react";
import { Magnetic } from "../Magnetic";

import { RiLinkedinFill, RiGithubLine, RiInstagramLine } from "react-icons/ri";

import { BiLogoGmail } from "react-icons/bi";

const SocialCard = () => {
  const socials = [
    {
      icon: RiLinkedinFill,
      href: "https://www.linkedin.com/in/banditadas-dev/",
    },
    {
      icon: RiGithubLine,
      href: "https://github.com/BanditaDas",
    },
    {
      icon: RiInstagramLine,
      href: "https://www.instagram.com/_bandita.9_/",
    },
    {
      icon: BiLogoGmail,
      href: "#contact",
    },
  ];

  return (
    <>
      <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-40 block mb-2 lg:mb-4">
        Socials
      </span>

      <div className="grid grid-cols-2 gap-2 md:gap-y-2 md:gap-x-2 lg:gap-y-4 lg:gap-x-5">
        {socials.map((social, i) => (
          <Magnetic key={i} strength={0.3}>
            <motion.a
              href={social.href}
              target={social.href.startsWith("#") ? "_self" : "_blank"}
              rel={
                social.href.startsWith("#") ? undefined : "noopener noreferrer"
              }
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="py-3 md:py-5 lg:py-6 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
            >
              <social.icon className="w-7 h-7 lg:w-5 lg:h-5" />
            </motion.a>
          </Magnetic>
        ))}
      </div>
    </>
  );
};

export default SocialCard;