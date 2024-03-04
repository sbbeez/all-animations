import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({
    x: -1,
    y: -1,
  });

  const updateMouseMovement = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMouseMovement);

    return () => {
      window.removeEventListener("mousemove", updateMouseMovement);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
