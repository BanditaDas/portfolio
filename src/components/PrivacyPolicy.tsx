import React from "react";
import { motion } from "motion/react";

export const PrivacyPolicy: React.FC = () => (
  <div className="py-20 px-6 md:px-20 bg-[#EBEAE9] dark:bg-[#141517] min-h-screen">
    <div className="max-w-3xl mx-auto text-zinc-900 dark:text-stone-100">
      <h1 className="text-4xl font-serif italic mb-8">Privacy Policy</h1>
      <p className="mb-4">Last updated: March 16, 2026</p>
      <p className="mb-4">
        Your privacy is important to us. This policy explains how we collect and
        use your information.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Information Collection
      </h2>
      <p className="mb-4">
        This website collects basic information such as your name, email
        address, and message when you submit the contact form. This information
        is used solely to respond to your inquiry and will not be shared with
        third parties. The contact form is powered by FormSubmit which securely
        forwards messages to my email. If you have any questions regarding your
        data, feel free to contact me.
      </p>
    </div>
  </div>
);
