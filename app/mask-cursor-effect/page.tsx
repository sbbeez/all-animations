"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import "./style.css";

const MaskCursorEffect = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);
  const size = isTextHovered ? 400 : 40;
  const { x, y } = useMousePosition();

  const toggleTextHovered = (hover: boolean) => {
    return () => setIsTextHovered(hover);
  };

  return (
    <main className="h-100vh cursor-default">
      <motion.div
        className="mask w-screen h-screen flex items-center justify-center"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={toggleTextHovered(true)}
          onMouseLeave={toggleTextHovered(false)}
          className="text-6xl p-10 leading-[66px]"
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="text-6xl p-10 leading-[66px]">
          I&apos;m a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
};

export default MaskCursorEffect;
