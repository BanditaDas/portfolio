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

  return <span className="inline-block min-w-70">{text}</span>;
};

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-4 md:px-8 overflow-hidden bg-[#EBEAE9] dark:bg-[#141517]">
      {/* 3D Avatar Video with transparent background */}
      <AvatarVideo />

      <div>
        <div className="flex justify-between items-end mb-8 min-[2000px]:mb-[4vh] relative z-20">
        <div className="flex flex-col gap-3 min-[2000px]:gap-[1.5vh]">
          <h2 className="text-xl md:text-2xl min-[2000px]:text-[2vw] font-light leading-tight max-w-sm min-[2000px]:max-w-[20vw] text-gray-400">
            <ScrambleText />
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden whitespace-nowrap mt-20 min-[2000px]:mt-[10vh] h-40 min-[2000px]:h-[15vh] w-full z-20 pointer-events-none">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] min-[2000px]:text-[8vw] font-semibold leading-[0.8] tracking-tighter uppercase pr-8 flex items-center">
            <span className="inline-block ">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
          </h1>
          <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] min-[2000px]:text-[8vw] font-semibold leading-[0.8] tracking-tighter uppercase pr-8 flex items-center">
            <span className="inline-block">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">Bandita Das</span><span className="mx-4 font-light opacity-50">—</span>
          </h1>
        </motion.div>
      </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 min-[2000px]:bottom-[5vh] left-4 md:left-8 min-[2000px]:left-[4vw] flex items-center gap-2 md:gap-3 min-[2000px]:gap-[1vw] bg-black/5 dark:bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1vh] rounded-full w-fit transition-colors duration-500 z-20">
        <BsFillGlobeCentralSouthAsiaFill className="w-4 h-4 md:w-5 md:h-5 min-[2000px]:w-[1.5vw] min-[2000px]:h-[1.5vw] animate-spin-slow" />
        <span className="text-sm md:text-base min-[2000px]:text-[1vw] font-light">Located in India</span>
      </div>

      <div className="absolute bottom-8 md:bottom-12 min-[2000px]:bottom-[5vh] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 min-[2000px]:gap-[1vw] z-20">
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs md:text-sm min-[2000px]:text-[0.8vw] opacity-50 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 md:h-12 min-[2000px]:h-[4vh] bg-black/20 dark:bg-white/20 transition-colors duration-500" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 min-[2000px]:bottom-[5vh] right-4 md:right-7 min-[2000px]:right-[4vw] z-20">
        <Magnetic strength={0.2}>
          <a 
            href="/Bandita_Das_resume.pdf"
            download
            className="flex items-center gap-1.5 md:gap-2 min-[2000px]:gap-[1vw] px-4 py-2 md:px-6 md:py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1vh] rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group/btn"
          >
            <span className="text-xs md:text-sm min-[2000px]:text-[1vw] font-medium">Resume</span>
            <HiDownload className="w-3.5 h-3.5 md:w-4 md:h-4 min-[2000px]:w-[1.2vw] min-[2000px]:h-[1.2vw] transition-transform group-hover/btn:translate-y-1" />
          </a>
        </Magnetic>
      </div>
    </section>
  );
};
