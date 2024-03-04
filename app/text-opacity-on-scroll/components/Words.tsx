"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Word = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

const Words = ({ paragraph }: { paragraph: string }) => {
  const target = useRef(null);
  const scrollData = useScroll({
    target,
    offset: ["start end", "end 0.5"],
  });

  const { scrollYProgress } = scrollData;

  const words = paragraph.split(" ");
  const lenWords = words.length;
  const wordsObj = words.map((word, index) => {
    const start = index / lenWords;
    const end = start + 1 / lenWords;
    return { word, start, end };
  });

  return (
    <motion.p
      ref={target}
      className="flex text-6xl leading-1 p-10 max-w-screen flex-wrap"
    >
      {wordsObj.map(({ word, start, end }, index: number) => {
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
};

export default Words;
