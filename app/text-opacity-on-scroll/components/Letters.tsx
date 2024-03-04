"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Letter = ({
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
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const Word = ({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const amount = range[1] - range[0];
  const step = amount / word.length;
  const letters = word.split("");

  const letterObj = letters.map((letter, index) => {
    const start = range[0] + index * step;
    const end = range[0] + (index + 1) * step;
    return { letter, start, end };
  });
  return (
    <span className="relative mr-3 mt-3">
      {letterObj.map(({ letter, start, end }, index) => (
        <Letter key={`c_${index}`} progress={progress} range={[start, end]}>
          {letter}
        </Letter>
      ))}
    </span>
  );
};

const Letters = ({ paragraph }: { paragraph: string }) => {
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
          <Word
            key={index}
            range={[start, end]}
            progress={scrollYProgress}
            word={word}
          />
        );
      })}
    </motion.p>
  );
};

export default Letters;
