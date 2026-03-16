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
    <div className="h-full flex flex-col justify-between gap-2">
      <div className="flex justify-between opacity-40">
        <RiMapPin2Line />
        <RiTimeLine />
      </div>

      <div >
        <div className="flex gap-1 text-3xl font-light pb-2">
          <AnimatedDigit value={h1} />
          <AnimatedDigit value={h2} />

          <span>:</span>

          <AnimatedDigit value={m1} />
          <AnimatedDigit value={m2} />

          <span>:</span>

          <AnimatedDigit value={s1} />
          <AnimatedDigit value={s2} />
        </div>

        <p className="text-sm opacity-60">Based in India</p>
      </div>
    </div>
  );
};

export default LocationCard;
