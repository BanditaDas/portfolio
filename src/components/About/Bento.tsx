import React from "react";
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
    { id: "intro", component: <IntroCard />, span: "md:col-span-2 md:row-span-1" },
    { id: "photo", component: <PhotoCard />, span: "md:col-span-1 md:row-span-1" },
    { id: "social", component: <SocialCard />, span: "md:col-span-1 md:row-span-1" },
    { id: "stack", component: <StackCard />, span: "md:col-span-3 md:row-span-1" },
    { id: "contact", component: <ContactCard />, span: "md:col-span-1 md:row-span-1" },
    { id: "location", component: <LocationCard />, span: "md:col-span-1 md:row-span-1" },
    { id: "github", component: <GithubCard />, span: "md:col-span-3 md:row-span-1" },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 px-4 md:px-8 bg-[#EBEAE9] dark:bg-[#141517]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${card.span} bg-[#f7f7f7] dark:bg-[#1c1d20] border border-black/5 dark:border-white/10 p-6 rounded-3xl`}
            >
              {card.component}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Bento;