import React from "react";
import { motion } from "motion/react";

export const TermsAndConditions: React.FC = () => (
  <div className="py-20 px-6 md:px-20 bg-[#EBEAE9] dark:bg-[#141517] min-h-screen">
    <div className="max-w-3xl mx-auto text-zinc-900 dark:text-stone-100">
      <h1 className="text-4xl font-serif italic mb-8">Terms and Conditions</h1>
      <p className="mb-4">Last updated: March 16, 2026</p>
      <p className="mb-4">By using this website, you agree to these terms and conditions.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Usage</h2>
      <p className="mb-4">
        1. Use of the Website This
        website is intended to showcase my work, projects, and professional
        information as a frontend developer. The content provided is for
        informational and personal viewing purposes only. 2. Intellectual
        Property All content on this website, including text, images, designs,
        and code samples, is the property of Bandita Das unless otherwise
        stated. You may not copy, reproduce, or distribute any content without
        permission. 3. External Links This website may contain links to external
        platforms such as GitHub, LinkedIn, or other websites. I am not
        responsible for the content or practices of those external websites. 4.
        Contact Form Usage If you choose to contact me through the contact form,
        you agree to provide accurate information. The information submitted
        will only be used to respond to your inquiry. 5. Changes to These Terms
        I may update these Terms and Conditions at any time without prior
        notice. Any changes will be reflected on this page. 6. Contact
        Information If you have any questions about these Terms and Conditions,
        you may contact me through the contact form on this website.
      </p>
    </div>
  </div>
);
