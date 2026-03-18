import React from "react";

const IntroCard = () => {
  return (
    <div>
      <h3 className="text-lg md:text-2xl lg:text-2xl min-[2000px]:text-[2vw] font-semibold mb-2 lg:mb-3 min-[2000px]:mb-[1.5vh]">
        Hi, I'm Bandita —
      </h3>

      <p className="text-xs md:text-[2vw] lg:text-base min-[2000px]:text-[1.2vw] opacity-60 leading-relaxed min-[2000px]:leading-[2vw]">
        I’m a frontend developer passionate about crafting modern, responsive, and engaging web interfaces. I enjoy building clean user experiences using React, JavaScript, and CSS, and I’m always exploring new tools and technologies to improve how users interact with the web.
      </p>
    </div>
  );
};

export default IntroCard;