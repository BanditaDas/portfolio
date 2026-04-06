import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Magnetic } from './Magnetic';

const fallbackProjects = [
  { 
    title: 'FocusFly', 
    image: 'https://picsum.photos/seed/obys/600/800',
    link: 'https://focus-fly.vercel.app/',
    description: 'Study sessions that feel like traveling.Turn your focus time into real-time flights across the globe.Pick a destination, start your session, and stay focused until you land.If you quit early… your flight fails.You’re not studying — you’re flying.'
  },
  { 
    title: 'Obys Agency', 
    image: 'https://picsum.photos/seed/obys/600/800',
    link: 'https://banditadas.github.io/Obys-Agency/',
    description: 'A creative agency website featuring advanced animations, smooth scrolling, and interactive elements. The project recreates a modern design-focused website using HTML, CSS, JavaScript, and animation libraries like GSAP for a highly engaging user experience.'
  },
  { 
    title: 'Exo-Ape',
    image: 'https://picsum.photos/seed/exo/600/800',
    link: 'https://exo-ape-j778.vercel.app/',
    description: 'A visually rich website inspired by modern creative agency designs. It showcases bold typography, smooth scrolling interactions, and immersive animations to create a dynamic and engaging frontend experience.'
  },
  { 
    title: 'Work', 
    image: 'https://picsum.photos/seed/work/600/800',
    link: 'https://work-ruby-three.vercel.app/',
    description: 'A modern web experience built with smooth animations and interactive UI elements. The project focuses on creating an engaging user interface with fluid transitions, responsive design, and visually appealing layouts to deliver a polished browsing experience.'
  },
  { 
    title: 'Two Good Co', 
    image: 'https://picsum.photos/seed/twogood/600/800',
    link: 'https://banditadas.github.io/Two-Good-CO/',
    description: 'A UI of an Australian food and product selling company called TWO GOOD CO.'
  },
];

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
  description: string;
}

export const AllProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <CustomCursor />
      <section className="pt-32 md:pt-40 pb-20 px-4 md:px-8 min-h-screen bg-[#EBEAE9] dark:bg-[#141517] transition-colors duration-300 flex flex-col">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 md:mb-20">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity mb-8">
              <FaArrowLeftLong className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-medium flex overflow-hidden">
              {"Archive".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03, ease: [0.33, 1, 0.68, 1] }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>
          </div>

          <div className="flex flex-col w-full">
            {loading ? (
              <div className="flex flex-col items-center justify-center gap-4 py-20">
                <div className="w-8 h-8 border-4 border-black/20 dark:border-white/20 border-t-black dark:border-t-white rounded-full animate-spin" />
                <p className="text-sm font-medium opacity-60">Loading Projects...</p>
              </div>
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={project.title + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-b border-black/10 dark:border-white/10 items-start md:items-center group"
                >
                  <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white capitalize group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h2>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex md:justify-end mt-4 md:mt-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/20 dark:border-white/20 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                      Live Website <LuArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 md:mt-24 flex justify-center"
          >
            <Magnetic>
              <a
                href="https://github.com/banditadas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-black/20 dark:border-white/20 text-base font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group"
              >
                <LuGithub className="w-5 h-5" />
                <span>View GitHub Profile</span>
                <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </>
  );
};
