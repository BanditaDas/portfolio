import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { GlossyName } from "./GlossyName";
import { ContactForm } from "./ContactForm";
import { Magnetic } from "./Magnetic";

export const Footer: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showPopup]);

  return (
    <footer
      id="contact"
      className="relative pt-12 min-[2000px]:pt-[8vh] pb-0 bg-[#EBEAE9] dark:bg-[#141517] text-black dark:text-white overflow-hidden "
    >
      <div className="max-w-5xl min-[2000px]:max-w-[70vw] mx-auto px-4 md:px-8 min-[2000px]:px-[4vw] relative z-10 mb-[-8vw] md:[-6vw] min-[2000px]:mb-[-4vw]">
        <div className="bg-[#f7f7f7] dark:bg-[#1c1d20] rounded-4xl min-[2000px]:rounded-[2vw] p-6 md:p-8 lg:p-10 min-[2000px]:p-[4vw] shadow-2xl border border-black/10 dark:border-white/10 transition-colors duration-500 ">
          <div className="flex flex-col lg:flex-row justify-between gap-12 min-[2000px]:gap-[6vw] mb-12 min-[2000px]:mb-[6vh]">
            {/* Left Section */}
            <div className="max-w-md min-[2000px]:max-w-[30vw] flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-3xl min-[2000px]:text-[2vw] font-medium mb-4 min-[2000px]:mb-[2vh] leading-tight min-[2000px]:leading-[1.2]">
                  <span className="text-5xl md:text-6xl min-[2000px]:text-[4vw] font-medium">
                    Let's build{" "}
                  </span>
                  <br />
                  something great together.
                </h3>
                <p className="text-gray-400 text-sm min-[2000px]:text-[1.2vw] mb-6 min-[2000px]:mb-[3vh] leading-relaxed min-[2000px]:leading-[1.8]">
                  Feel free to reach out for collaborations, or just a friendly
                  hello. <br /> I'm always open to discussing new projects.
                </p>
              </div>

              <div className="mt-6 lg:mt-auto">
                <button
                  onClick={() => setShowPopup(true)}
                  className="group flex items-center gap-3 min-[2000px]:gap-[1vw] px-5 py-2.5 min-[2000px]:px-[2vw] min-[2000px]:py-[1vh] bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-full min-[2000px]:rounded-[1.5vw] transition-all duration-300 text-sm min-[2000px]:text-[1vw] font-medium w-fit"
                >
                  <span>Buy me a monitor</span>
                  <span className="text-xl min-[2000px]:text-[1.5vw] group-hover:scale-110 transition-transform duration-300">
                    🖥️ 🤪
                  </span>
                </button>
              </div>
            </div>

            {/* Right Section - Modern Form */}
            {/* <div className="w-full lg:w-100">
              <form action="https://formsubmit.co/dbandita362@gmail.com" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New submission from your portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 px-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/10 dark:focus:bg-white/10 transition-all text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 px-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/10 dark:focus:bg-white/10 transition-all text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 px-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={3}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/10 dark:focus:bg-white/10 transition-all text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="w-full bg-black text-white dark:bg-white dark:text-black font-semibold rounded-xl px-4 py-3 hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 text-sm">
                  Send Message
                </button>
              </form>
            </div> */}
            <ContactForm />
          </div>

          {/* Bottom Section */}
          <div className="pt-3 md:pt-3 lg:mt-6 min-[2000px]:mt-[3vh] min-[2000px]:pt-[2vh] border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 min-[2000px]:gap-[2vw]">
            <p className="text-xs min-[2000px]:text-[0.8vw] text-gray-500">
              © {new Date().getFullYear()} Bandita. All rights reserved.
            </p>
            <div className="flex gap-6 min-[2000px]:gap-[3vw]">
              <a
                href="https://www.linkedin.com/in/bandita-das-74bb58292/"
                target="blank"
                className="text-xs min-[2000px]:text-[0.8vw] text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/BanditaDas"
                target="blank"
                className="text-xs min-[2000px]:text-[0.8vw] text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <Link
                to="/privacy"
                className="text-xs min-[2000px]:text-[0.8vw] text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-xs min-[2000px]:text-[0.8vw] text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Huge Name Background */}
      <div className="relative z-0 w-full flex justify-center pointer-events-none translate-y-[15%]">
        <GlossyName name="Bandita" />
      </div>

      {/* Monitor Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#f7f7f7] dark:bg-[#1c1d20] p-8 min-[2000px]:p-[4vw] rounded-3xl min-[2000px]:rounded-[2vw] max-w-md min-[2000px]:max-w-[30vw] w-full relative border border-black/10 dark:border-white/10 shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 min-[2000px]:top-[2vh] min-[2000px]:right-[2vw] p-2 min-[2000px]:p-[1vw] bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setShowPopup(false)}
              >
                <IoClose size={24} className="text-black dark:text-white min-[2000px]:w-[1.5vw] min-[2000px]:h-[1.5vw]" />
              </button>

              <div className="text-center pt-4">
                <span className="text-6xl min-[2000px]:text-[4vw] mb-6 min-[2000px]:mb-[3vh] block">🖥️</span>
                <h3 className="text-2xl min-[2000px]:text-[1.8vw] font-bold text-zinc-900 dark:text-white mb-4 min-[2000px]:mb-[2vh]">
                  Thanks for the support!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 min-[2000px]:mb-[4vh] leading-relaxed text-sm min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8]">
                  I really appreciate the thought! While I'm not actually
                  accepting monitor donations right now, the best way you can
                  support me is by checking out my projects and connecting with
                  me on LinkedIn.
                </p>

                <div className="flex justify-center">
                  
                  <Magnetic strength={0.3}>
                    <motion.a
                      href="https://www.linkedin.com/in/banditadas-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="py-5 px-6 md:py-4 lg:py-6 min-[2000px]:py-[3vh] min-[2000px]:px-[4vw] bg-black/5 dark:bg-white/5 rounded-xl min-[2000px]:rounded-[1vw] flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
                    >
                      <RiLinkedinFill className="w-5 h-5 min-[2000px]:w-[1.5vw] min-[2000px]:h-[1.5vw]" />
                    </motion.a>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
