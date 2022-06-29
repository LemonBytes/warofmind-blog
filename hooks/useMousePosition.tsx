import { useEffect, useState } from "react";

interface IPosition {
  xPosition: number;
  yPosition: number;
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    xPosition: 0,
    yPosition: 0,
  });
  useEffect(() => {
    const moveEvent = (e: any) =>
      setMousePosition({ xPosition: e.clientX, yPosition: e.clientY });
    window.addEventListener("mousemove", moveEvent);
    return () => {
      window.removeEventListener("mousemove", moveEvent);
    };
  }, []);
  return mousePosition;
};
