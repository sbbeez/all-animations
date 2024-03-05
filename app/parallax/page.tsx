"use client";
import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 200);
  return (
    <section className="h-[100vh] flex items-center justify-center snap-center">
      <div className="h-[400px] w-[300px] relative m-5" ref={ref}>
        <img src={`/${id}.jpeg`} alt="A London skyscraper" />
      </div>
      <motion.h2
        className="font-mono text-4xl -ml-10"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <motion.div
        className="fixed right-0 left-0 bottom-10 h-5 bg-white"
        style={{ scaleX }}
      />
    </>
  );
}
