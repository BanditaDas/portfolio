import React from 'react';

interface GlossyNameProps {
  name: string;
}

export const GlossyName: React.FC<GlossyNameProps> = ({ name }) => {
  return (
    <h1 
      className="text-[28vw] md:text-[24vw] font-black tracking-[-0.05em] leading-[0.8] text-black/3 dark:text-white/3 select-none whitespace-nowrap transition-colors duration-500"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {name}
    </h1>
  );
};
