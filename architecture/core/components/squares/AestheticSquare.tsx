import React from 'react';
const { motion, useViewportScroll, useTransform } = require('framer-motion');
export interface ISquare {
  size: number;
  position: { x: number; y: number };
  rotation: number;
  screenHeight: number;
}

const AestheticSquare: React.FC<ISquare> = ({
  size,
  position,
  rotation,
  screenHeight,
}) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, screenHeight], [position.y, -50]);

  return (
    <motion.div
      initial={{
        x: position.x,
        y: position.y,
        width: size,
        height: size,
        rotate: rotation,
      }}
      style={{ y: y1 }}
      className="absolute z-0 border border-blurrRed  "
    />
  );
};

export default AestheticSquare;
