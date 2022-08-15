import { useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const tittleLetter: string[] = [
  'W',
  'A',
  'R',
  '#',
  'O',
  'F',
  '#',
  'M',
  'I',
  'N',
  'D',
];

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
    <h1 className="flex h-screen w-screen items-center justify-center  font-naruto text-9xl text-blurrRed">
      {tittleLetter.map((letter, key) => {
        return (
          <div
            style={{
              marginBottom: `${minimized.yPosition}px`,
              right: `${minimized.xPosition}px`,
            }}
            className="relative float-left transition-all duration-100 ease-in-out"
            key={key}
          >
            {letter}
          </div>
        );
      })}
    </h1>
  );
};
