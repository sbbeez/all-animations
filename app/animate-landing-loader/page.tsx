"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

const AnimateLandingLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return <ReactLenis>
    
  </ReactLenis>;
};

export default AnimateLandingLoader;
