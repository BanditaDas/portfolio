import React, { useState } from "react";
import { motion } from "motion/react";

import IntroCard from "./IntroCard";
import PhotoCard from "./PhotoCard";
import SocialCard from "./SocialCard";
import StackCard from "./StackCard";
import ContactCard from "./ContactCard";
import LocationCard from "./LocationCard";
import GithubCard from "./GithubCard";

const Bento: React.FC = () => {
  const cards = [
    {
      id: "intro",
      component: <IntroCard />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 min-h-[25vh] md:min-h-[22vh] lg:min-h-[30vh]",
    },
    {
      id: "photo",
      component: <PhotoCard />,
      className: "col-span-1 md:col-span-1 lg:col-span-1 min-h-[40vw] md:min-h-[22vh] lg:min-h-[30vh]",
    },
    {
      id: "social",
      component: <SocialCard />,
      className: "col-span-1 md:col-span-1 lg:col-span-1 min-h-[40vw] md:min-h-[22vh] lg:min-h-[30vh]",
    },
    {
      id: "stack",
      component: <StackCard />,
      className: "col-span-1 md:col-span-2 lg:col-span-3 min-h-[28vh] md:min-h-[20vh] lg:min-h-[25vh]",
    },
    {
      id: "contact",
      component: <ContactCard />,
      className: "col-span-1 md:col-span-1 lg:col-span-1 min-h-[20vh] md:min-h-[20vh] lg:min-h-[25vh]",
    },
    {
      id: "location",
      component: <LocationCard />,
      className: "col-span-1 md:col-span-1 lg:col-span-1 min-h-[40vw] md:min-h-[20vh] lg:min-h-[25vh]",
    },
    {
      id: "github",
      component: <GithubCard />,
      className: "col-span-1 md:col-span-2 lg:col-span-3 min-h-[25vh] md:min-h-[20vh] lg:min-h-[25vh]",
    },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section
      id="about"
      className="py-12 md:py-20 px-4 md:px-8 bg-[#EBEAE9] dark:bg-[#141517]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${card.className} group relative rounded-3xl h-full`}
            >
              {/* Glow background */}
              <div className="absolute -inset-px rounded-3xl bg-black/70 dark:bg-white/40 opacity-0 group-hover:opacity-30 blur-md transition duration-500 " />

              {/* Card */}
              <div className="relative w-full h-full bg-[#f7f7f7] dark:bg-[#1c1d20] border border-black/5 dark:border-white/10 p-6 rounded-3xl flex flex-col hover:border-black/30 hover:dark:border-white/30">
                {card.component}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bento;