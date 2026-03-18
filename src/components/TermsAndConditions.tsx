import React from "react";
import { motion } from "motion/react";

export const TermsAndConditions: React.FC = () => (
  <div className="pt-32 pb-20 md:pt-30 min-[2000px]:pt-[15vh] min-[2000px]:pb-[10vh] px-6 md:px-20 min-[2000px]:px-[10vw] bg-[#EBEAE9] dark:bg-[#141517] min-h-screen">
    <div className="max-w-3xl min-[2000px]:max-w-[50vw] mx-auto text-zinc-900 dark:text-stone-100">
      <h1 className="text-5xl min-[2000px]:text-[3vw] font-bold mb-8 min-[2000px]:mb-[3vh]">Terms and Conditions</h1>
      <p className="mb-8 min-[2000px]:mb-[3vh] min-[2000px]:text-[1vw] opacity-70">Last updated: March 17, 2026</p>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          Welcome to my professional portfolio. By accessing and using this website, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully before using the site.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">1. Use of the Website</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          This website is intended to showcase my work, projects, and professional information as a freelance frontend developer. The content provided here is for informational purposes and to facilitate potential professional opportunities.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">2. Intellectual Property</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          All content on this website, including but not limited to text, images, designs, animations, and code samples, is the exclusive property of Bandita Das unless otherwise stated. You may not copy, reproduce, distribute, or create derivative works from this content without explicit written permission.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">3. Professional Engagements</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          Contacting me through this website or discussing potential projects does not constitute a formal business agreement. Any official freelance work, consulting, or employment will be subject to a separate, mutually agreed-upon contract or Statement of Work (SOW).
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">4. Third-Party Links</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          This website contains links to external platforms such as GitHub, LinkedIn, and live project demos. I do not have control over the content, privacy policies, or practices of these external sites and accept no responsibility for them.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">5. Modifications to Terms</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          I reserve the right to modify or replace these Terms and Conditions at any time without prior notice. Any changes will be updated on this page with a revised "Last updated" date. Continued use of the website after any such changes constitutes your acceptance of the new terms.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">6. Contact Information</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          If you have any questions or concerns regarding these Terms and Conditions, please contact me through the contact form on this website or directly at <a href="mailto:dbandita362@gmail.com" className="underline hover:opacity-70 transition-opacity">dbandita362@gmail.com</a>.
        </p>
      </section>
    </div>
  </div>
);
