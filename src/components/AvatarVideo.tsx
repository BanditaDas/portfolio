import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../ThemeContext';

export const AvatarVideo: React.FC = () => {
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = theme === 'dark' ? "/avatar.mp4" : "/avatarlight.mp4";
      video.load();
      video.play().catch(err => console.warn("Video play failed after theme change:", err));
    }
  }, [theme]);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    // Force muted on the DOM element to satisfy strict autoplay policies (e.g., Safari)
    video.muted = true;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const processFrame = () => {
      if (!video.paused && !video.ended) {
        // Match canvas dimensions to video resolution
        if (canvas.width !== video.videoWidth) canvas.width = video.videoWidth;
        if (canvas.height !== video.videoHeight) canvas.height = video.videoHeight;

        if (canvas.width > 0 && canvas.height > 0) {
          // Draw the current video frame to the canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          // Get pixel data to remove the background
          const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = frame.data;
          const l = data.length;

          let bgR, bgG, bgB;

          if (themeRef.current === 'light') {
            // Robust sampling for light mode
            let sumR = 0, sumG = 0, sumB = 0;
            let count = 0;
            
            // Sample top and bottom borders
            for (let x = 0; x < canvas.width; x += 20) {
              for (let y of [0, canvas.height - 1]) {
                const idx = (y * canvas.width + x) * 4;
                sumR += data[idx];
                sumG += data[idx + 1];
                sumB += data[idx + 2];
                count++;
              }
            }
            
            // Sample left and right borders
            for (let y = 0; y < canvas.height; y += 20) {
              for (let x of [0, canvas.width - 1]) {
                const idx = (y * canvas.width + x) * 4;
                sumR += data[idx];
                sumG += data[idx + 1];
                sumB += data[idx + 2];
                count++;
              }
            }

            bgR = sumR / count;
            bgG = sumG / count;
            bgB = sumB / count;
          } else {
            // Original sampling for dark mode
            const topLeftIdx = 0;
            const topRightIdx = (canvas.width - 1) * 4;
            
            bgR = (data[topLeftIdx] + data[topRightIdx]) / 2;
            bgG = (data[topLeftIdx + 1] + data[topRightIdx + 1]) / 2;
            bgB = (data[topLeftIdx + 2] + data[topRightIdx + 2]) / 2;
          }

          const threshold1 = themeRef.current === 'light' ? 30 : 10;
          const threshold2 = themeRef.current === 'light' ? 45 : 20;

          for (let i = 0; i < l; i += 4) {
            const r = data[i + 0];
            const g = data[i + 1];
            const b = data[i + 2];

            // Use max difference for sharper background removal
            const diffR = Math.abs(r - bgR);
            const diffG = Math.abs(g - bgG);
            const diffB = Math.abs(b - bgB);
            const maxDiff = Math.max(diffR, diffG, diffB);

            // Very conservative threshold to protect dark hair
            // We only remove pixels that are almost identical to the sampled background
            if (maxDiff < threshold1) {
              data[i + 3] = 0;
            } else if (maxDiff < threshold2) {
              data[i + 3] = ((maxDiff - threshold1) / (threshold2 - threshold1)) * 255;
            } else {
              data[i + 3] = 255;
            }
          }

          // Put the processed pixels back onto the canvas
          ctx.putImageData(frame, 0, 0);
        }
      }
      animationRef.current = requestAnimationFrame(processFrame);
    };

    video.addEventListener('play', () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(processFrame);
    });

    // Attempt to force play in case autoplay was prevented
    video.play().catch(err => console.warn("Video autoplay prevented:", err));

    // If it's already playing, start processing immediately
    if (!video.paused && !video.ended) {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(processFrame);
    }

    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden"
    >
      <motion.div
        className="relative w-full max-w-87.5 md:max-w-125 min-[2000px]:max-w-[30vw] aspect-3/4 mt-10 md:mt-20 min-[2000px]:mt-[10vh]"
      >
        {/* Hidden video element used as the source */}
        <video
          ref={videoRef}
          src={theme === 'dark' ? "/avatar.mp4" : "/avatarlight.mp4"}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            e.currentTarget.play().catch(err => console.warn("Autoplay prevented:", err));
          }}
          className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        />
        {/* Canvas displaying the processed frames with transparent background */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{
            // CSS Mask to smoothly fade out the bottom (waist-up effect)
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};
