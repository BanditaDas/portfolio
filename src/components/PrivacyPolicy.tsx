import React from "react";
import { motion } from "motion/react";

export const PrivacyPolicy: React.FC = () => (
  <div className="pt-32 pb-20 md:pt-30 min-[2000px]:pt-[15vh] min-[2000px]:pb-[10vh] px-6 md:px-20 min-[2000px]:px-[10vw] bg-[#EBEAE9] dark:bg-[#141517] min-h-screen">
    <div className="max-w-3xl min-[2000px]:max-w-[50vw] mx-auto text-zinc-900 dark:text-stone-100">
      <h1 className="text-5xl min-[2000px]:text-[3vw] font-bold mb-8 min-[2000px]:mb-[3vh]">Privacy Policy</h1>
      <p className="mb-8 min-[2000px]:mb-[3vh] min-[2000px]:text-[1vw] opacity-70">Last updated: March 17, 2026</p>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          Thank you for visiting my portfolio. As a freelance web developer, I am committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information is collected, how it is used, and what rights you have in relation to it when you visit and interact with this website.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">1. Information I Collect</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          The only personal information collected on this website is the information you voluntarily provide through the contact form. This includes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 opacity-80 min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw] min-[2000px]:space-y-[1vh] min-[2000px]:pl-[2vw]">
          <li>Your Name</li>
          <li>Your Email Address</li>
          <li>Any details or messages you choose to include in your inquiry</li>
        </ul>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">2. How I Use Your Information</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          The information you provide is used strictly for professional communication purposes. Specifically, I use this information to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 opacity-80 min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw] min-[2000px]:space-y-[1vh] min-[2000px]:pl-[2vw]">
          <li>Respond to your project inquiries and questions.</li>
          <li>Discuss potential freelance collaborations or employment opportunities.</li>
          <li>Send you relevant information regarding the web development services you requested.</li>
        </ul>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">3. Information Sharing and Third Parties</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          I do not sell, rent, or share your personal information with third parties for marketing purposes. Your contact form submissions are processed securely via FormSubmit, a third-party service that forwards your messages directly to my professional email address.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">4. Data Retention</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          I retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, such as resolving your inquiry or maintaining ongoing professional correspondence.
        </p>
      </section>

      <section className="mb-8 min-[2000px]:mb-[4vh]">
        <h2 className="text-2xl min-[2000px]:text-[1.8vw] font-semibold mb-4 min-[2000px]:mb-[2vh]">5. Contact Me</h2>
        <p className="leading-relaxed mb-4 min-[2000px]:mb-[2vh] min-[2000px]:text-[1vw] min-[2000px]:leading-[1.8vw]">
          If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your data, please feel free to reach out to me via the contact form on this website or directly at <a href="mailto:dbandita362@gmail.com" className="underline hover:opacity-70 transition-opacity">dbandita362@gmail.com</a>.
        </p>
      </section>
    </div>
  </div>
);
