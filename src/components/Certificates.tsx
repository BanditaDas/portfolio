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
    <section id="certificates" className="py-12 md:py-20 min-[2000px]:py-[10vh] px-4 md:px-8 min-[2000px]:px-[5vw] bg-[#EBEAE9] dark:bg-[#141517] ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 min-[2000px]:gap-[3vw] mb-12 md:mb-16 min-[2000px]:mb-[8vh] lg:px-50 min-[2000px]:px-[10vw]">
        <h2 className="text-[12vw] md:text-[8vw] lg:text-6xl min-[2000px]:text-[5vw] font-medium flex overflow-hidden">
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

      <div className="max-w-8xl min-[2000px]:max-w-[80vw] mx-auto px-6 min-[2000px]:px-[3vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 min-[2000px]:gap-[2vw]">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="relative w-full h-60 min-[2000px]:h-[25vh] cursor-pointer overflow-hidden rounded-3xl min-[2000px]:rounded-[2vw]"
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
            <div className="absolute top-4 right-4 min-[2000px]:top-[2vh] min-[2000px]:right-[2vw] bg-white/20 dark:bg-black/60 backdrop-blur-md rounded-full p-2 min-[2000px]:p-[1vw]">
              <LuArrowUpRight className="text-white w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] lg:w-5 lg:h-5 min-[2000px]:w-[1.5vw] min-[2000px]:h-[1.5vw]" />
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 min-[2000px]:p-[3vw] bg-linear-to-t from-black/95 via-black/60 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: hoveredId === cert.id ? 1 : 0,
                y: hoveredId === cert.id ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white font-bold text-[5vw] md:text-[3vw] lg:text-lg min-[2000px]:text-[1.5vw]">{cert.title}</h3>
              <p className="text-zinc-300 text-[3.5vw] md:text-[2vw] lg:text-sm min-[2000px]:text-[1vw]">
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
              className="bg-white dark:bg-zinc-900 p-6 min-[2000px]:p-[3vw] rounded-3xl min-[2000px]:rounded-[2vw] max-w-2xl min-[2000px]:max-w-[40vw] w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 min-[2000px]:top-[2vh] min-[2000px]:right-[2vw] p-2 min-[2000px]:p-[1vw] bg-zinc-200 dark:bg-zinc-800 rounded-full"
                onClick={() => setSelectedCert(null)}
              >
                <IoClose className="w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] lg:w-6 lg:h-6 min-[2000px]:w-[2vw] min-[2000px]:h-[2vw]" />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-2xl min-[2000px]:rounded-[1vw] mb-6"
              />
              <h3 className="text-[6vw] md:text-[4vw] lg:text-2xl min-[2000px]:text-[2vw] font-bold text-zinc-900 dark:text-white mb-2 min-[2000px]:mb-[1vh]">
                {selectedCert.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-[4vw] md:text-[2.5vw] lg:text-lg min-[2000px]:text-[1.2vw]">
                {selectedCert.issuer} • {selectedCert.year}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
