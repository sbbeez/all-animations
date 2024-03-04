"use client";
import Letters from "./components/Letters";
import Paragraph from "./components/Paragraph";
import Words from "./components/Words";
import { ReactLenis } from "@studio-freight/react-lenis";

const text = `A web animation tutorial featuring a gradient text scroll opacity effect using Nextjs and Framer Motion. 
In this tutorial I animate a paragraph work by word modifying the opacity in scroll. 
Inspired by many awwwards websites.`;

const TextOpactityOnScroll = () => {
  return (
    <ReactLenis root>
      <div className="h-screen" />
      <Paragraph paragraph={text} />
      <div className="h-screen" />
      <Words paragraph={text} />
      <div className="h-screen" />
      <Letters paragraph={text} />
      <div className="h-screen" />
    </ReactLenis>
  );
};

export default TextOpactityOnScroll;
