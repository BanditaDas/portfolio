import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Twitter, 
  Globe, 
  Instagram, 
  Linkedin, 
  Mail, 
  Github, 
  Code, 
  Briefcase, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check,
  Figma,
  Cpu
} from 'lucide-react';
import { Magnetic } from './Magnetic';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('dbandita362@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bentoItems = [
    {
      id: 'intro',
      className: 'md:col-span-2 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between md:h-56',
      content: (
        <div>
          <h3 className="text-2xl font-light mb-3">Hi, I'm Bandita —</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            I’m a frontend developer passionate about crafting modern, responsive, and engaging web interfaces. I enjoy building clean user experiences using React, JavaScript, and CSS, and I’m always exploring new tools and technologies to improve how users interact with the web.
          </p>
        </div>
      )
    },
    {
      id: 'photo',
      className: 'md:col-span-1 md:row-span-1 bg-[#1c1d20] border border-white/10 rounded-3xl overflow-hidden group min-h-[160px] md:h-56',
      content: (
        <div className="w-full h-full relative">
          <img 
            src="/bento.gif" 
            alt="Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d20] to-transparent opacity-40" />
        </div>
      )
    },
    {
      id: 'socials',
      className: 'md:col-span-1 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between md:h-56',
      content: (
        <>
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Socials</span>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/bandita-das-74bb58292/' },
              { icon: Github, href: 'https://github.com/BanditaDas' },
              { icon: Instagram, href: 'https://www.instagram.com/_bandita.9_/' },
              { icon: Mail, href: '#contact' }
            ].map((social, i) => (
              <Magnetic key={i} strength={0.3}>
                <motion.a 
                  href={social.href} 
                  target={social.href.startsWith('#') ? "_self" : "_blank"}
                  rel={social.href.startsWith('#') ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full py-6 md:py-4 lg:py-5 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'stack',
      className: 'md:col-span-2 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl',
      content: (
        <div>
          <span className="text-[10px] uppercase tracking-widest opacity-40 mb-4 block">Stack I use</span>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'HTML5', icon: Code },
              { name: 'CSS', icon: Code },
              { name: 'JavaScript', icon: Code },
              { name: 'React JS', icon: Code },
              { name: 'Tailwind CSS', icon: Globe },
              { name: 'Bootstrap', icon: Globe },
              { name: 'GSAP', icon: Globe },
              { name: 'Locomotive JS', icon: Globe },
              { name: 'Java', icon: Cpu },
              { name: 'Python', icon: Cpu },
              { name: 'MongoDB', icon: Cpu }
            ].map((tech, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors cursor-default"
              >
                <tech.icon className="w-3 h-3 opacity-60" />
                <span className="text-xs font-light">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      className: 'md:col-span-2 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between group',
      content: (
        <>
          <h4 className="text-xl font-light">Have a project in mind?</h4>
          <div className="flex items-center justify-between mt-16">
            <Magnetic strength={0.2}>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 bg-black/5 dark:bg-white/5 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span className="text-sm font-medium">{copied ? 'Email Copied' : 'Copy Email'}</span>
              </button>
            </Magnetic>
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Outer Breathing Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-emerald-500/20"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              {/* Inner Breathing Ring */}
              <motion.div 
                className="absolute w-8 h-8 rounded-full bg-emerald-500/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              {/* Core Dot */}
              <div className="relative w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            </div>
          </div>
        </>
      )
    },
    {
      id: 'location',
      className: 'md:col-span-1 md:row-span-1 bg-[#1c1d20] border border-white/10 p-6 rounded-3xl flex flex-col justify-between',
      content: (
        <>
          <div className="flex justify-between items-start mb-4">
            <MapPin className="w-4 h-4 opacity-40" />
            <Clock className="w-4 h-4 opacity-40" />
          </div>
          <div>
            <h4 className="text-xl font-light mb-1">{time}</h4>
            <p className="text-xs opacity-60">Based in India</p>
          </div>
        </>
      )
    },
    {
      id: 'github',
      className: 'md:col-span-3 md:row-span-1 bg-[#1c1d20] border border-white/10 p-5 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-[#222327] transition-colors',
      content: (
        <a href="https://github.com/BanditaDas" target="_blank" rel="noopener noreferrer" className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-[10px] uppercase tracking-widest opacity-40 block">GitHub Contributions</span>
            <Github className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex justify-between text-[8px] opacity-40 mb-1 px-1">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
            <div className="flex gap-[3px] items-end opacity-80 group-hover:opacity-100 transition-opacity overflow-hidden justify-between">
              {Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, j) => {
                    const intensity = Math.random();
                    let bg = 'bg-[#161b22]'; // empty
                    if (intensity > 0.85) bg = 'bg-[#39d353]';
                    else if (intensity > 0.65) bg = 'bg-[#26a641]';
                    else if (intensity > 0.45) bg = 'bg-[#006d32]';
                    else if (intensity > 0.25) bg = 'bg-[#0e4429]';
                    return <div key={j} className={`w-[8px] h-[8px] rounded-[2px] ${bg}`} />
                  })}
                </div>
              ))}
            </div>
          </div>
        </a>
      )
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-8 bg-[#f5f2eb] dark:bg-[#141517] text-black dark:text-white overflow-hidden transition-colors duration-500">
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
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              whileHover={{ 
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`${item.className.replace('bg-[#1c1d20]', 'bg-[#fdfbf7] dark:bg-[#1c1d20]').replace('border-white/10', 'border-black/5 dark:border-white/10').replace('bg-white/5', 'bg-black/5 dark:bg-white/5').replace('hover:bg-[#222327]', 'hover:bg-[#eae6d9] dark:hover:bg-[#222327]')} transition-all duration-500 hover:border-black/20 dark:hover:border-white/30 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]`}
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
