import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Magnetic } from './Magnetic';

export const NotFound: React.FC = () => {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 px-4 md:px-8 min-h-screen bg-[#EBEAE9] dark:bg-[#141517] transition-colors duration-300 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-8xl md:text-[12rem] font-bold text-black dark:text-white leading-none tracking-tighter"
          >
            404
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-medium mt-4 md:mt-8 text-black dark:text-white"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md"
          >
            The page you are looking for doesn't exist or has been moved.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <Magnetic>
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-black/20 dark:border-white/20 text-base font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group"
              >
                <FaArrowLeftLong className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </>
  );
};
