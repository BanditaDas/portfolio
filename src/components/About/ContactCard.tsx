import React, { useState } from "react";
import { Magnetic } from "../Magnetic";
import { RiFileCopyLine, RiCheckLine } from "react-icons/ri";
import { motion } from "motion/react";

const ContactCard = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dbandita362@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <h4 className="text-xl font-medium pb-8">Have a project in mind?</h4>

      <div className="flex items-center justify-between">
        <Magnetic strength={0.2}>
          <button
            onClick={copyEmail}
            className="flex items-center gap-3 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full"
          >
            {copied ? <RiCheckLine /> : <RiFileCopyLine />}

            <span className="text-xs font-medium">
              {copied ? "Email Copied" : "Copy Email"}
            </span>
          </button>
        </Magnetic>

        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Outer Breathing Ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-500/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Inner Breathing Ring */}
          <motion.div
            className="absolute w-8 h-8 rounded-full bg-emerald-500/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          {/* Core Dot */}
          <div className="relative w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        </div>
      </div>
    </>
  );
};

export default ContactCard;
