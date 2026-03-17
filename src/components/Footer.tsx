import React from 'react';
import { GlossyName } from './GlossyName';
import { ContactForm } from './ContactForm';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative pt-12 pb-0 bg-[#EBEAE9] dark:bg-[#141517] text-black dark:text-white overflow-hidden transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 mb-[-8vw] md:[-6vw]">
        <div className="bg-[#f7f7f7] dark:bg-[#1c1d20] rounded-4xl p-6 md:p-8 lg:p-10 shadow-2xl border border-black/10 dark:border-white/10 transition-colors duration-500">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            {/* Left Section */}
            <div className="max-w-md flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
                  <span className='text-5xl md:text-6xl font-medium'>Let's build </span><br />something great together.
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Feel free to reach out for collaborations, or just a friendly hello. <br /> I'm always open to discussing new projects.
                </p>
              </div>
              
              <div className="mt-6 lg:mt-auto">
                <button className="group flex items-center gap-3 px-5 py-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-full transition-all duration-300 text-sm font-medium w-fit">
                  <span>Buy me a monitor</span>
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🖥️ 🤪</span>
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
          <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Bandita. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/bandita-das-74bb58292/" target='blank' className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/BanditaDas" target='blank' className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors">GitHub</a>
              <a href="/privacy" className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* Huge Name Background */}
      <div className="relative z-0 w-full flex justify-center pointer-events-none translate-y-[15%]">
        <GlossyName name="Bandita" />
      </div>
    </footer>
  );
};
