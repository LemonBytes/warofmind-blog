import React from 'react';
const { motion } = require('framer-motion');
export interface ISquare {
  size: number;
  position: { x: number; y: number };
  rotation: number;
  screenHeight: number;
}

export const AestheticSquare: React.FC<ISquare> = ({
  size,
  position,
  rotation,
}) => {
  return (
    <motion.div
      initial={{
        x: position.x,
        y: position.y,
        width: size,
        height: size,
        rotate: rotation,
      }}
      animate={{
        y: [position.y, position.y - 100, position.y + 75],
      }}
      transition={{
        duration: 75,
        ease: 'easeInOut',
        times: [0, 0.5, 0.8, 1, 1.2],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      className="-z-1 relative border border-blurrRed  "
    />
  );
};
