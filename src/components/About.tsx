import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  RiNodejsLine,
  RiMapPin2Line,
  RiReactjsLine,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiGithubLine,
  RiTimeLine,
  RiFileCopyLine,
  RiCheckLine,
} from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { HiDatabase } from "react-icons/hi";
import { GrJava } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { SiGsap, SiExpress } from "react-icons/si";
import { Magnetic } from "./Magnetic";

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
  );
  const [contributions, setContributions] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://github.com/users/BanditaDas/contributions')}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        const days = Array.from(doc.querySelectorAll('td[data-date]'));
        
        const contributionsData = days.map(day => ({
          date: day.getAttribute('data-date') || '',
          level: parseInt(day.getAttribute('data-level') || '0', 10)
        })).filter(d => d.date);

        // Sort chronologically to ensure correct sequence regardless of HTML table structure
        contributionsData.sort((a, b) => a.date.localeCompare(b.date));

        const levels = contributionsData.map(d => d.level);
        if (levels.length > 0) {
          // Take the last 364 days to exactly fit your 52 columns * 7 rows grid
          setContributions(levels.slice(-364));
        }
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("dbandita362@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dynamically calculate the last 12 months based on the current date
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonth = new Date().getMonth();
  const dynamicMonths = Array.from({ length: 12 }, (_, i) => monthNames[(currentMonth - 11 + i + 12) % 12]);

  const bentoItems = [
    {
      id: "intro",
      className:
        "md:col-span-2 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between md:h-56",
      content: (
        <div>
          <h3 className="text-2xl font-semibold mb-3">Hi, I'm Bandita —</h3>
          <p className="text-m opacity-60 leading-relaxed">
            I’m a frontend developer passionate about crafting modern,
            responsive, and engaging web interfaces. I enjoy building clean user
            experiences using React, JavaScript, and CSS, and I’m always
            exploring new tools and technologies to improve how users interact
            with the web.
          </p>
        </div>
      ),
    },
    {
      id: "photo",
      className:
        "md:col-span-1 md:row-span-1 bg-[#1c1d20] border border-white/10 rounded-3xl overflow-hidden group min-h-[160px] md:h-56",
      content: (
        <div className="w-full h-full relative flex items-center justify-center">
          <div className="flex items-end gap-[3px] select-none scale-350">
            <span className="text-[clamp(24px,2.4vw,36px)] font-bold tracking-tighter text-black dark:text-white leading-none">
              Bd
            </span>
            <div className="w-2.5 h-2.5 bg-[#F05641] rounded-full mb-1.5" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d20] to-transparent opacity-40" />
        </div>
      ),
    },
    {
      id: "socials",
      className:
        "md:col-span-1 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between md:h-56",
      content: (
        <>
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">
            Socials
          </span>
          <div className="grid grid-cols-2 gap-y-4 gap-x-5">
            {[
              {
                icon: RiLinkedinFill,
                href: "https://www.linkedin.com/in/bandita-das-74bb58292/",
              },
              { icon: RiGithubLine, href: "https://github.com/BanditaDas" },
              {
                icon: RiInstagramLine,
                href: "https://www.instagram.com/_bandita.9_/",
              },
              { icon: BiLogoGmail, href: "#contact" },
            ].map((social, i) => (
              <Magnetic key={i} strength={0.3}>
                <motion.a
                  href={social.href}
                  target={social.href.startsWith("#") ? "_self" : "_blank"}
                  rel={
                    social.href.startsWith("#")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="py-6 md:py-4 lg:py-6 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "stack",
      className:
        "md:col-span-3 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl",
      content: (
        <div>
          <span className="text-[10px] uppercase tracking-widest opacity-40 mb-4 block">
            Stack I use
          </span>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "JavaScript", icon: RiJavascriptFill },
              { name: "React JS", icon: RiReactjsLine },
              { name: "Tailwind CSS", icon: RiTailwindCssFill },
              { name: "GSAP", icon: SiGsap },
              { name: "Locomotive JS", icon: MdAnimation },
              { name: "Node", icon: RiNodejsLine },
              { name: "MongoDB", icon: HiDatabase },
              { name: "Express", icon: SiExpress },
              { name: "Java", icon: GrJava },
              { name: "Github", icon: FiGithub },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors cursor-default"
              >
                <tech.icon className="w-4.5 h-4.5 opacity-60" />
                <span className="text-xs font-light">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      className:
        "md:col-span-1 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between group ",
      content: (
        <>
          <h4 className="text-xl font-medium pb-8 ">Have a project in mind?</h4>
          <div className="flex items-center justify-between">
            <Magnetic strength={0.2}>
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
              >
                {copied ? (
                  <RiCheckLine className="w-4 h-4" />
                ) : (
                  <RiFileCopyLine className="w-4 h-4" />
                )}
                <span className="text-xs font-medium">
                  {copied ? "Email Copied" : "Copy Email"}
                </span>
              </button>
            </Magnetic>
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Outer Breathing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-500/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Inner Breathing Ring */}
              <motion.div
                className="absolute w-8 h-8 rounded-full bg-emerald-500/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              {/* Core Dot */}
              <div className="relative w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            </div>
          </div>
        </>
      ),
    },
    {
      id: "location",
      className:
        "md:col-span-1 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between",
      content: (
        <>
          <div className="flex justify-between items-start mb-4">
            <RiMapPin2Line className="w-4 h-4 opacity-40" />
            <RiTimeLine className="w-4 h-4 opacity-40" />
          </div>
          <div>
            <h4 className="text-3xl font-light mb-1">{time}</h4>
            <p className="text-sm opacity-60">Based in India</p>
          </div>
        </>
      ),
    },
    {
      id: "github",
      className:
        "md:col-span-3 md:row-span-1 bg-[#1c1d20] border border-white/10 p-5 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-[#222327] transition-colors",
      content: (
        <a
          href="https://github.com/BanditaDas"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex flex-col justify-between"
        >
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-[10px] uppercase tracking-widest opacity-40 block">
              GitHub Contributions
            </span>
            <RiGithubLine className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex justify-between text-[8px] opacity-40 mb-1 px-1">
              {dynamicMonths.map((month, index) => (
                <span key={index}>{month}</span>
              ))}
            </div>
            <div className="flex gap-[3px] items-end opacity-80 group-hover:opacity-100 transition-opacity overflow-hidden justify-between">
              {Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, j) => {
                    let bg = "bg-[#161b22]"; // empty
                    const dayIndex = i * 7 + j;
                    
                    if (contributions.length > 0) {
                      // Live data mapping
                      const level = contributions[dayIndex] || 0;
                      if (level === 4) bg = "bg-[#39d353]";
                      else if (level === 3) bg = "bg-[#26a641]";
                      else if (level === 2) bg = "bg-[#006d32]";
                      else if (level === 1) bg = "bg-[#0e4429]";
                    } else {
                      // Fallback / Loading state
                      const intensity = Math.random();
                      if (intensity > 0.85) bg = "bg-[#39d353]";
                      else if (intensity > 0.65) bg = "bg-[#26a641]";
                      else if (intensity > 0.45) bg = "bg-[#006d32]";
                      else if (intensity > 0.25) bg = "bg-[#0e4429]";
                    }
                    
                    return (
                      <div
                        key={j}
                        className={`w-[8px] h-[8px] rounded-[2px] ${bg}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </a>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 px-4 md:px-8 bg-[#EBEAE9] dark:bg-[#141517] text-black dark:text-white overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`${item.className.replace("bg-[#1c1d20]", "bg-[#f7f7f7] dark:bg-[#1c1d20]").replace("border-white/10", "border-black/5 dark:border-white/10").replace("bg-white/5", "bg-black/5 dark:bg-white/5").replace("hover:bg-[#222327]", "hover:bg-[#e9e9e9] dark:hover:bg-[#222327]")} transition-all duration-500 hover:border-black/20 dark:hover:border-white/30 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]`}
            >
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.4 }}
              >
                {item.content}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
