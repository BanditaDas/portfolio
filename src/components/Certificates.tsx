import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const certificates = [
  {
    id: 1,
    title: "Frontend Domination",
    issuer: "Sheryians Coding School",
    year: "2023",
    image: "./certificates/frontend domination.png",
  },
  {
    id: 2,
    title: "Reimagine Hackathon",
    issuer: "Sheryians Coding School",
    year: "2024",
    image: "./certificates/frontend hackathon.png",
  },
  {
    id: 3,
    title: "Introduction To Machine Learning",
    issuer: "NPTEL",
    year: "2025",
    image: "./certificates/NPTEL ss.png",
  },
];

export const Certificates: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current !== null) clearInterval(timerRef.current);
      return;
    }

    // Trigger immediately on resume
    setIndex((prev) => (prev + 1) % certificates.length);

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-20 px-6 md:px-20 bg-[#EBEAE9] dark:bg-[#141517] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-medium flex overflow-hidden">
              {"Certificates".split("").map((char, index) => (
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
          <span className="text-zinc-700 font-mono">
            {index + 1}/{certificates.length}
          </span>
        </div>

        <div className="relative flex items-center justify-center gap-4 h-100">
          {/* Previous Image */}
          <motion.div className="w-1/4 h-64 opacity-50 hidden md:block">
            <img
              src={
                certificates[
                  (index - 1 + certificates.length) % certificates.length
                ].image
              }
              alt="prev"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Active Image */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center cursor-pointer "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={certificates[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <p className="text-xl font-mono tracking-widest text-zinc-700 dark:text-zinc-300 mb-2">
                  {certificates[index].title}
                </p>
                <img
                  src={certificates[index].image}
                  alt={certificates[index].title}
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
                <p className="text-sm font-mono tracking-widest text-zinc-700 dark:text-zinc-300 mt-2">
                  {certificates[index].issuer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Image */}
          <motion.div className="w-1/4 h-64 opacity-50 hidden md:block">
            <img
              src={certificates[(index + 1) % certificates.length].image}
              alt="next"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
