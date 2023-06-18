import { useEffect, useState } from 'react';

interface ISize {
  innerWidth: number;
  innerHeight: number;
}

export const PageTitle = () => {
  return (
    <h1 className="z-20 flex animate-pulse-slow items-center  justify-center   bg-black p-3 py-[50%] font-naruto  text-6xl text-blurrRed md:text-8xl lg:text-9xl">
      WAR OF MIND
    </h1>
  );
};
