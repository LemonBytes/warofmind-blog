import Link from 'next/link';
import React from 'react';

export const LeftSidebar = () => {
  return (
    <div className=" md:-0 hidden border border-r-blurrRed md:fixed md:flex md:h-screen md:w-[10vw]">
      <div className="h-50 absolute bottom-[5%]  flex w-full cursor-pointer items-center justify-center self-center">
        <Link href={'/'} className=" font-naruto text-5xl text-blurrRed">
          HOME
        </Link>
      </div>
    </div>
  );
};
