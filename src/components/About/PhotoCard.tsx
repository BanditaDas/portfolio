import React from "react";

const PhotoCard = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center ">
      <div className="flex items-end gap-0.75 select-none scale-[5.5] md:scale-[6] lg:scale-[3.5] opacity-70">
        <span className="text-[clamp(24px,2.4vw,36px)] font-bold tracking-tighter text-black dark:text-white leading-none">
          Bd
        </span>
        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-[#F05641] rounded-full mb-1 lg:mb-1.5" />
      </div>
    </div>
  );
};

export default PhotoCard;