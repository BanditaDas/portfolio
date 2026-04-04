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
    title: 'Obys Agency', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/obys/600/800',
    link: 'https://banditadas.github.io/Obys-Agency/',
    description: 'A creative agency website clone featuring advanced animations, smooth scrolling, and interactive elements. The project recreates a modern design-focused website using HTML, CSS, JavaScript, and animation libraries like GSAP for a highly engaging user experience.'
  },
  { 
    title: 'Exo-Ape', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/exo/600/800',
    link: '#',
    description: 'A visually rich website inspired by modern creative agency designs. It showcases bold typography, smooth scrolling interactions, and immersive animations to create a dynamic and engaging frontend experience.'
  },
  { 
    title: 'Work', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/work/600/800',
    link: '#',
    description: 'A modern web experience built with smooth animations and interactive UI elements. The project focuses on creating an engaging user interface with fluid transitions, responsive design, and visually appealing layouts to deliver a polished browsing experience.'
  },
  { 
    title: 'Two Good Co', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/twogood/600/800',
    link: 'https://banditadas.github.io/Two-Good-CO/',
    description: 'A UI clone of an Australian food and product selling company called TWO GOOD CO.'
  },
  { 
    title: 'Flipkart', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/flipkart/600/800',
    link: 'https://banditadas.github.io/Flipkart-clone/',
    description: 'A UI clone of FLIPKART, a shopping website.'
  }
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/banditadas/repos?sort=created&direction=desc');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        const formattedProjects = data
          .filter((repo: any) => !repo.fork) // Filter out forks
          .slice(0, 5) // Limit to recent 5 repos
          .map((repo: any) => ({
            title: repo.name.replace(/-/g, ' '),
            category: repo.language || 'Project',
            year: new Date(repo.created_at).getFullYear().toString(),
            image: `https://opengraph.githubassets.com/1/banditadas/${repo.name}`,
            link: repo.homepage || repo.html_url,
            description: repo.description || 'A modern web experience built with smooth animations and interactive UI elements. The project focuses on creating an engaging user interface with fluid transitions, responsive design, and visually appealing layouts.'
          }));
          
        if (formattedProjects.length > 0) {
          setProjects(formattedProjects);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
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
                <p className="text-sm font-medium opacity-60">Loading GitHub Projects...</p>
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
      <Footer />
    </>
  );
};
