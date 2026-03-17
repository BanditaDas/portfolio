import React, { useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { Magnetic } from "./Magnetic";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
  {
    title: "Obys Agency",
    category: "UI Clone",
    year: "2023",
    video: "./obys.mp4",
    description: "A creative agency website clone featuring advanced animations, smooth scrolling, and interactive elements. The project recreates a modern design-focused website using HTML, CSS, JavaScript, and animation libraries like GSAP for a highly engaging user experience.",
    link: "https://banditadas.github.io/Obys-Agency/",
  },
  {
    title: "Exo-Ape",
    category: "UI Clone",
    year: "2023",
    video: "./exoape.mp4",
    description:
      "A visually rich website inspired by modern creative agency designs. It showcases bold typography, smooth scrolling interactions, and immersive animations to create a dynamic and engaging frontend experience.",
    link: "https://exo-ape-j778.vercel.app/",
  },
  {
    title: "Work",
    category: "UI Clone",
    year: "2023",
    video: "./work.mp4",
    description:
      "A modern web experience built with smooth animations and interactive UI elements. The project focuses on creating an engaging user interface with fluid transitions, responsive design, and visually appealing layouts to deliver a polished browsing experience.",
    link: "https://work-ruby-three.vercel.app/",
  },
];

export const Work: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isHoveringContent, setIsHoveringContent] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section
      id="work"
      className="py-12 md:py-20 px-4 md:px-8 relative bg-[#EBEAE9] dark:bg-[#141517]"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <h2 className="text-[12vw] md:text-[8vw] lg:text-6xl font-medium flex overflow-hidden">
            {"Recent Work".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </div>

        <div className="border-t border-black/10 dark:border-white/10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-10 border-b border-black/10 dark:border-white/10 cursor-pointer relative"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => {
                setActiveProject(null);
                setIsHoveringContent(false);
              }}
            >
              <div className="flex items-center gap-8 z-10 w-full md:w-auto">
                <h3
                  className="text-[8vw] md:text-[5vw] lg:text-4xl font-medium transition-all duration-500 group-hover:opacity-40 md:group-hover:translate-x-4"
                  onMouseEnter={() => setIsHoveringContent(true)}
                  onMouseLeave={() => setIsHoveringContent(false)}
                >
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 z-10 mt-4 md:mt-0">
                <p
                  className="max-w-sm text-sm opacity-60 hidden lg:block"
                  onMouseEnter={() => setIsHoveringContent(true)}
                  onMouseLeave={() => setIsHoveringContent(false)}
                >
                  {project.description}
                </p>
                <div className="flex items-center gap-8">
                  <Magnetic strength={0.3}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group/btn text-[3.5vw] md:text-[2vw] lg:text-sm"
                      onMouseEnter={() => setIsHoveringContent(true)}
                      onMouseLeave={() => setIsHoveringContent(false)}
                    >
                      <span>Live Website</span>
                      <GoArrowUpRight className="w-[4vw] h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-4 lg:h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Image Preview */}
        <motion.div
          className="fixed top-0 left-0 w-100 h-70 pointer-events-none z-50 overflow-hidden rounded-xl"
          style={{
            x: imageX,
            y: imageY,
            translateX: "-50%",
            translateY: "-50%",
            scale: activeProject !== null && !isHoveringContent ? 1 : 0,
            opacity: activeProject !== null && !isHoveringContent ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: `translateY(-${(activeProject || 0) * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.title} className="w-full h-full">
                <video
                  src={project.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Magnetic>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-black/20 dark:border-white/20 text-[4vw] md:text-[2.5vw] lg:text-base font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group/btn">
              <span>More Work</span>
              <GoArrowUpRight className="w-[4.5vw] h-[4.5vw] md:w-[3vw] md:h-[3vw] lg:w-4 lg:h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};
