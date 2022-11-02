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
        y: [position.y, position.y - 75, position.y + 75, position.y],
      }}
      transition={{ duration: 75 }}
      className="-z-1 relative border border-blurrRed  "
    />
  );
};
