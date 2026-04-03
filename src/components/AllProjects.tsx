import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import { Navbar } from './Navbar';

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

const ProjectCard = ({ project, index, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex flex-col w-full max-w-5xl h-[70vh] rounded-[30px] overflow-hidden origin-top shadow-2xl"
      >
        <div className="w-full h-full relative overflow-hidden bg-zinc-900">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm border border-white/20">
                {project.category}
              </span>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
              >
                <LuArrowUpRight size={28} />
              </a>
            </div>
            
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">{project.title}</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/80 text-lg">
                <span className="font-mono">{project.year}</span>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/50" />
                <p className="max-w-xl">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const AllProjects: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <>
      <CustomCursor />
      <Navbar />
      <section className="pt-32 md:pt-40 px-4 md:px-8 bg-[#EBEAE9] dark:bg-[#141517] transition-colors duration-300">
        <div className="max-w-6xl mx-auto mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity mb-8">
            <FaArrowLeftLong className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-6xl md:text-8xl font-medium flex overflow-hidden">
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

        <div ref={container} className="relative pb-[10vh]">
          {allProjects.map((project, index) => {
            const targetScale = 1 - ((allProjects.length - index) * 0.05);
            return (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                progress={scrollYProgress} 
                range={[index * (1 / allProjects.length), 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
