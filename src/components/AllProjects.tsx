import React from 'react';
import { motion } from 'motion/react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { Magnetic } from './Magnetic';
import { Link } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const allProjects = [
  { 
    title: 'Obys Agency', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/obys/600/400',
    description: 'A UI clone of a Ukrainian company called OBYS AGENCY.',
    link: 'https://banditadas.github.io/Obys-Agency/'
  },
  { 
    title: 'Two Good Co', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/twogood/600/400',
    description: 'A UI clone of an Australian food and product selling company called TWO GOOD CO.',
    link: 'https://banditadas.github.io/Two-Good-CO/'
  },
  { 
    title: 'Flipkart', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/flipkart/600/400',
    description: 'A UI clone of FLIPKART, a shopping website.',
    link: 'https://banditadas.github.io/Flipkart-clone/'
  },
  { 
    title: 'Sundown Studio', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/sundown/600/400',
    description: 'A UI clone of Sundown Studio website.',
    link: 'https://banditadas.github.io/Sundown-Studio/'
  },
  { 
    title: 'Refokus', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/refokus/600/400',
    description: 'A UI clone of Refokus agency website.',
    link: 'https://banditadas.github.io/Refokus-Clone/'
  },
  { 
    title: 'Cynthia Ugwu', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/cynthia/600/400',
    description: 'A UI clone of Cynthia Ugwu portfolio.',
    link: 'https://banditadas.github.io/Cynthia-Ugwu-Clone/'
  }
];

export const AllProjects: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <section className="py-32 md:py-40 px-4 md:px-8 min-h-screen bg-[#fdfbf7] dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity mb-8">
              <FaArrowLeftLong className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-medium flex overflow-hidden">
              {"All Projects".split('').map((char, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col gap-4"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-black rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <LuArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </a>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    <span className="text-sm opacity-60">{project.year}</span>
                  </div>
                  <p className="text-sm opacity-60 mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 text-xs rounded-full border border-black/10 dark:border-white/10">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
