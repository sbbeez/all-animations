"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Paragraph = ({ paragraph }: { paragraph: string }) => {
  const container = useRef(null);
  const scrollData = useScroll({
    target: container,
    offset: ["start 0.8", "end 0.6"],
  });

  const { scrollYProgress } = scrollData;
  return (
    <motion.p
      ref={container}
      style={{ opacity: scrollYProgress }}
      className="flex text-6xl leading-1 p-10"
    >
      {paragraph}
    </motion.p>
  );
};

export default Paragraph;
