import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsHidden(!!target.closest('[data-cursor-hide]'));
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHidden ? 0 : (isActive ? 4 : 1),
        opacity: isHidden ? 0 : 1,
      }}
    />
  );
};
