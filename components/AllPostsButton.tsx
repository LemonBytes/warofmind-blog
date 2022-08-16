import Link from 'next/link';
import React from 'react';

export const AllPostsLink = () => {
  return (
    <Link href={'/test'}>
      <a className="group mb-4 mt-10 flex h-10 w-64 skew-x-[45deg] items-center justify-center border border-white text-center font-naruto text-3xl text-white transition delay-200 ease-in-out hover:border-blurrRed">
        <div className="delay-50 flex skew-x-[-45deg] items-center justify-center transition ease-in-out">
          <div className="flex h-10 w-64 skew-x-[-45deg] items-center justify-center border border-white bg-black transition  delay-150 ease-in-out group-hover:border-blurrRed">
            <div className=" delay-250 flex skew-x-[45deg] items-center justify-center border transition ease-in-out group-hover:border-blurrRed">
              <p className="flex h-10 w-[296px] items-center justify-center transition delay-75 ease-in-out group-hover:h-14 group-hover:text-blurrRed">
                all posts...
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
