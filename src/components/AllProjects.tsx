import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const fallbackProjects = [
  { 
    title: 'The Roseline Ring', 
    category: 'Rings', 
    year: '2023',
    image: 'https://picsum.photos/seed/ring1/600/800',
    link: '#'
  },
  { 
    title: 'The Zoë Earrings', 
    category: 'Earrings', 
    year: '2023',
    image: 'https://picsum.photos/seed/earring1/600/800',
    link: '#'
  },
  { 
    title: 'The Hibiscus Ring II', 
    category: 'Rings', 
    year: '2024',
    image: 'https://picsum.photos/seed/ring2/600/800',
    link: '#'
  },
  { 
    title: 'The Chubby Hoops', 
    category: 'Earrings', 
    year: '2024',
    image: 'https://picsum.photos/seed/earring2/600/800',
    link: '#'
  },
  { 
    title: 'The Chain Necklace', 
    category: 'Necklaces', 
    year: '2023',
    image: 'https://picsum.photos/seed/neck1/600/800',
    link: '#'
  },
  { 
    title: 'Obys Agency', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/obys/600/800',
    link: 'https://banditadas.github.io/Obys-Agency/'
  },
  { 
    title: 'Two Good Co', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/twogood/600/800',
    link: 'https://banditadas.github.io/Two-Good-CO/'
  },
  { 
    title: 'Flipkart', 
    category: 'UI Clone', 
    year: '2023',
    image: 'https://picsum.photos/seed/flipkart/600/800',
    link: 'https://banditadas.github.io/Flipkart-clone/'
  }
];

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

export const AllProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/banditadas/repos?sort=created&direction=desc');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        const formattedProjects = data
          .filter((repo: any) => !repo.fork) // Filter out forks
          .map((repo: any) => ({
            title: repo.name.replace(/-/g, ' '),
            category: repo.language || 'Project',
            year: new Date(repo.created_at).getFullYear().toString(),
            image: `https://opengraph.githubassets.com/1/banditadas/${repo.name}`,
            link: repo.homepage || repo.html_url
          }));
          
        if (formattedProjects.length > 0) {
          setProjects(formattedProjects);
          setActiveIndex(Math.floor(formattedProjects.length / 2));
        } else {
          setProjects(fallbackProjects);
          setActiveIndex(2);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
        setProjects(fallbackProjects);
        setActiveIndex(2);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      <section className="pt-32 md:pt-40 pb-20 px-4 md:px-8 min-h-screen bg-[#EBEAE9] dark:bg-[#141517] transition-colors duration-300 overflow-hidden flex flex-col">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 md:mb-12">
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
        </div>

        <div 
          className="flex-1 relative w-full flex items-center justify-center min-h-[500px] md:min-h-[600px]"
          style={{ perspective: 1200 }}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-8 h-8 border-4 border-black/20 dark:border-white/20 border-t-black dark:border-t-white rounded-full animate-spin" />
              <p className="text-sm font-medium opacity-60">Loading GitHub Projects...</p>
            </div>
          ) : projects.map((project, index) => {
            const offset = index - activeIndex;
            const isCenter = offset === 0;
            const direction = Math.sign(offset);
            const absOffset = Math.abs(offset);

            const rotateY = isCenter ? 0 : direction * -35;
            const translateZ = absOffset * -150;
            const translateX = offset * (isMobile ? 120 : 220);
            const scale = isCenter ? 1 : 0.85;
            const zIndex = 100 - absOffset;
            const opacity = absOffset > 3 ? 0 : 1;

            return (
              <motion.div
                key={project.title + index}
                className="absolute w-[260px] md:w-[360px] h-[380px] md:h-[520px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10"
                initial={false}
                animate={{
                  rotateY,
                  z: translateZ,
                  x: `calc(-50% + ${translateX}px)`,
                  y: "-50%",
                  scale,
                  opacity,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
                onClick={() => setActiveIndex(index)}
                style={{
                  left: "50%",
                  top: "50%",
                  transformStyle: "preserve-3d",
                  zIndex,
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl md:text-2xl font-medium tracking-wide uppercase">
                    {project.title}
                  </h3>
                </div>
                
                {/* Center Card Extra UI (Link button) */}
                <AnimatePresence>
                  {isCenter && project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LuArrowUpRight className="w-5 h-5" />
                    </motion.a>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto w-full flex justify-center items-center gap-6 mt-8">
          <button 
            onClick={handlePrev} 
            disabled={activeIndex === 0 || loading}
            className="p-3 rounded-full border border-black/20 dark:border-white/20 disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <MdOutlineChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2 flex-wrap justify-center max-w-[60vw]">
            {!loading && projects.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeIndex ? 'bg-black dark:bg-white' : 'bg-black/20 dark:bg-white/20'}`} 
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={activeIndex === projects.length - 1 || loading}
            className="p-3 rounded-full border border-black/20 dark:border-white/20 disabled:opacity-30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <MdOutlineChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};
