import React from "react";

export interface ISquare {
  size: { width: string; height: string };
  position: { x: string; y: string };
  color: string;
  rotation: string;
}

export const AestheticSquare: React.FC<ISquare> = ({
  size,
  position,
  color,
  rotation,
}) => {
  return (
    <div
      className={`${size.width} ${size.height} absolute ${position.x} ${position.y} border-2 ${color} ${rotation}`}
    />
  );
};
