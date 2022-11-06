import { useEffect, useState } from 'react';
import { useMousePosition } from '../../../hooks/useMousePosition';

interface ISize {
  innerWidth: number;
  innerHeight: number;
}

export const PageTitle = () => {
  const { xPosition, yPosition } = useMousePosition();
  const [size, setSize] = useState<ISize>({
    innerWidth: 0,
    innerHeight: 0,
  });
  useEffect(() => {
    setSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
  }, []);
  const minimizePosition = (xPosition: number, yPosition: number) => ({
    xPosition:
      xPosition > size.innerWidth / 2
        ? Math.floor(xPosition / 100) * 1
        : Math.floor(xPosition / 100) * -1,

    yPosition:
      yPosition > size.innerHeight / 2
        ? Math.floor(yPosition / 100) + 3 * 2
        : Math.floor(yPosition / 100) + 3 * -2,
  });

  let minimized = minimizePosition(xPosition, yPosition);

  return (
    <h1 className="z-20  flex h-screen w-full items-center justify-center bg-black font-naruto text-6xl text-blurrRed  lg:text-9xl ">
      <p
        style={{
          marginBottom: `${minimized.yPosition}px`,
          right: `${minimized.xPosition}px`,
        }}
        className="relative  transition-all duration-100 ease-in-out"
      >
        <div className="flex">
          <p className="z-20 mb-32  bg-black md:m-4">War</p>
          <p className="z-20 mb-16 mt-16  bg-black md:m-4">of</p>
          <p className="z-20 mt-32  bg-black md:m-4">Mind</p>
        </div>
      </p>
    </h1>
  );
};
