import Link from 'next/link';
import React from 'react';

export const LeftSidebar = () => {
  return (
    <div className=" md:-0 hidden border border-r-blurrRed md:fixed md:flex md:h-screen md:w-[10vw]">
      <div className="h-50 absolute right-12 bottom-[5%]  flex w-20 cursor-pointer items-center justify-center self-center ">
        <Link href={'/'} className="p-11 font-naruto text-5xl text-blurrRed">
          HOME
        </Link>
      </div>
    </div>
  );
};
