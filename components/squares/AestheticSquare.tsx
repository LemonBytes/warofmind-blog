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
      className={
        "absolute  border-2" +
        " " +
        size.width +
        " " +
        size.height +
        " " +
        position.x +
        " " +
        position.y +
        " " +
        color +
        " " +
        rotation
      }
    />
  );
};
