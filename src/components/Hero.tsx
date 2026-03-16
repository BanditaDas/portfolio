import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
BsFillGlobeCentralSouthAsiaFill
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { AvatarVideo } from './AvatarVideo';
import { Magnetic } from './Magnetic';

const ScrambleText = () => {
  const phrases = ['Frontend Developer', 'UI & UX Developer'];
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const triggerScramble = () => {
      currentIndex = (currentIndex + 1) % phrases.length;
      const targetText = phrases[currentIndex];
      let frame = 0;
      const maxFrames = 20;
      
      const interval = setInterval(() => {
        frame++;
        const currentScramble = targetText.split('').map((char, index) => {
          if (char === ' ') return ' ';
          const revealPoint = (index / targetText.length) * maxFrames;
          if (frame > revealPoint) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        
        setText(currentScramble);
        
        if (frame >= maxFrames) {
          clearInterval(interval);
          timeoutId = setTimeout(triggerScramble, 3000);
        }
      }, 50);
    };

    timeoutId = setTimeout(triggerScramble, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return <span className="inline-block min-w-[280px]">{text}</span>;
};

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[100vh] flex flex-col justify-center px-4 md:px-8 overflow-hidden bg-[#EBEAE9] dark:bg-[#141517]">
      {/* 3D Avatar Video with transparent background */}
      <AvatarVideo />

      <div>
        <div className="flex justify-between items-end mb-8 relative z-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-light leading-tight max-w-sm text-gray-400">
            <ScrambleText />
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden whitespace-nowrap mt-20 h-40 w-full z-20 pointer-events-none">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <h1 className="text-[10vw] font-semibold leading-[0.8] tracking-tighter uppercase pr-8 flex items-center">
            <span className="inline-block ">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
          </h1>
          <h1 className="text-[10vw] font-semibold leading-[0.8] tracking-tighter uppercase pr-8 flex items-center">
            <span className="inline-block">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
          </h1>
        </motion.div>
      </div>
      </div>

      <div className="absolute bottom-12 left-4 md:left-8 flex items-center gap-3 bg-black/5 dark:bg-white/10 backdrop-blur-md px-6 py-3 rounded-full w-fit transition-colors duration-500 z-20">
        <BsFillGlobeCentralSouthAsiaFill className="w-5 h-5 animate-spin-slow" />
        <span className="text-base font-light">Located in India</span>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm opacity-50 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-black/20 dark:bg-white/20 transition-colors duration-500" />
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-4 md:right-8 z-20">
        <Magnetic strength={0.2}>
          <a 
            href="/Bandita_Das_new.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group/btn"
          >
            <span className="text-sm font-medium">Resume</span>
            <HiDownload className="w-4 h-4 transition-transform group-hover/btn:translate-y-1" />
          </a>
        </Magnetic>
      </div>
    </section>
  );
};
