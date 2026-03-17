import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  AnimatePresence,
} from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

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
    title: "Introduction To ML",
    issuer: "NPTEL",
    year: "2025",
    image: "./certificates/NPTEL ss.png",
  },
  {
    id: 4,
    title: "Workplace Fundamentals",
    issuer: "British Council",
    year: "2024",
    image: "./certificates/british council.png",
  },
];

// export const Certificates: React.FC = () => {
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const x = useMotionValue(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useAnimationFrame((t, delta) => {
//     if (hoveredId !== null) return;

//     // Width of 3 elements (300px each) + 2 gaps (24px each) = 948px
//     const width = 3 * 300 + 2 * 24;

//     let newX = x.get() - delta * 0.1; // Adjust speed here

//     if (newX <= -width) {
//       newX = 0;
//     }
//     x.set(newX);
//   });

//   // Duplicate list for infinite loop effect
//   const displayCertificates = [...certificates, ...certificates];

//   return (
//     <section className="py-20 bg-[#EBEAE9] dark:bg-[#141517] transition-colors duration-300 overflow-hidden">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16 px-50">
//         <h2 className="text-5xl md:text-6xl font-medium flex overflow-hidden">
//           {"Certificates".split("").map((char, index) => (
//             <motion.span
//               key={index}
//               initial={{ y: "100%" }}
//               whileInView={{ y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.03,
//                 ease: [0.33, 1, 0.68, 1],
//               }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </h2>
//       </div>

//       <div className="relative flex items-center h-100">
//         <motion.div ref={containerRef} className="flex gap-6" style={{ x }}>
//           {displayCertificates.map((cert, i) => (
//             <motion.div
//               key={`${cert.id}-${i}`}
//               className="w-75 shrink-0 cursor-pointer"
//               animate={{
//                 filter:
//                   hoveredId !== null && hoveredId !== cert.id
//                     ? "blur(8px)"
//                     : "blur(0px)",
//                 opacity: hoveredId !== null && hoveredId !== cert.id ? 0.3 : 1,
//                 scale: hoveredId === cert.id ? 1.05 : 1,
//               }}
//               onMouseEnter={() => setHoveredId(cert.id)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               <div className="bg-zinc-900 rounded-2xl p-4 shadow-2xl border border-white/10">
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="w-full h-48 object-cover rounded-xl mb-4"
//                 />
//                 <h3 className="text-white font-bold text-lg">{cert.title}</h3>
//                 <p className="text-zinc-400 text-sm">
//                   {cert.issuer} • {cert.year}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

export const Certificates: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null
  >(null);

  // Prevent background scrolling when a certificate is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-12 md:py-20 px-4 md:px-8 bg-[#EBEAE9] dark:bg-[#141517] ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16 px-50">
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

      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="relative w-full h-60 cursor-pointer overflow-hidden rounded-3xl"
            animate={{
              filter:
                hoveredId !== null && hoveredId !== cert.id
                  ? "blur(8px)"
                  : "blur(0px)",
              opacity: hoveredId !== null && hoveredId !== cert.id ? 0.3 : 1,
              scale: hoveredId === cert.id ? 1.05 : 1,
            }}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/20 dark:bg-black/60 backdrop-blur-md rounded-full p-2">
              <LuArrowUpRight className="text-white" size={20} />
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/95 via-black/60 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: hoveredId === cert.id ? 1 : 0,
                y: hoveredId === cert.id ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg">{cert.title}</h3>
              <p className="text-zinc-300 text-sm">
                {cert.issuer} • {cert.year}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-3xl max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full"
                onClick={() => setSelectedCert(null)}
              >
                <IoClose size={24} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                {selectedCert.issuer} • {selectedCert.year}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
