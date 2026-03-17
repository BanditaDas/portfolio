import React, { useState, useEffect } from "react";
import { RiMapPin2Line, RiTimeLine } from "react-icons/ri";
import AnimatedDigit from "./AnimatedDigit";

const LocationCard = () => {
  const [time, setTime] = useState({
    hour: "00",
    minute: "00",
    second: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime({
        hour: String(now.getHours()).padStart(2, "0"),
        minute: String(now.getMinutes()).padStart(2, "0"),
        second: String(now.getSeconds()).padStart(2, "0"),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const [h1, h2] = time.hour.split("");
  const [m1, m2] = time.minute.split("");
  const [s1, s2] = time.second.split("");

  return (
    <div className="h-full flex flex-col justify-between gap-1 lg:gap-2">
      <div className="flex justify-between opacity-40">
        <RiMapPin2Line className="w-5 h-5 lg:w-5 lg:h-5" />
        <RiTimeLine className="w-5 h-5 lg:w-5 lg:h-5" />
      </div>

      <div>
        <div className="flex gap-1 text-2xl lg:text-3xl font-light pb-1 lg:pb-2">
          <div className="flex gap-0.3">
            <AnimatedDigit value={h1} />
            <AnimatedDigit value={h2} />
          </div>

          <span>:</span>

          <div className="flex gap-0.5">
            <AnimatedDigit value={m1} />
            <AnimatedDigit value={m2} />
          </div>

          <span>:</span>

          <div className="flex gap-0.5">
            <AnimatedDigit value={s1} />
            <AnimatedDigit value={s2} />
          </div>
        </div>

        <p className="text-xs lg:text-sm opacity-60">Based in India</p>
      </div>
    </div>
  );
};

export default LocationCard;
