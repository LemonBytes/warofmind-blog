import Link from 'next/link';
import React from 'react';
import Slider from '../../slider/Slider';

export const LeftSidebar = () => {
  return (
    <div className=" md:-0 hidden items-center border border-r-blurrRed md:fixed md:flex md:h-screen md:w-[10vw] md:flex-col">
      <Slider
        position={'top-16'}
        animation={'animate-infinite-down'}
        reverseText={true}
      />
      <div className="h-50 absolute  bottom-[5%] flex w-full  cursor-pointer flex-col items-center justify-center self-center">
        <Link
          href={'/'}
          className=" animate-pulse font-naruto text-5xl text-blurrRed hover:animate-none"
        >
          HOME
        </Link>
      </div>
    </div>
  );
};
