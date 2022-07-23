import Link from "next/link";
import React from "react";

export const AllPostsButton = () => {
  return (
    <Link href={"/test"}>
      <a
        role="button"
        className="w-86 h-16 flex items-center justify-center skew-x-[45deg] mb-4 border border-white text-center font-naruto text-white text-4xl group hover:border-blurrRed  transition ease-in-out delay-200"
      >
        <div className="flex items-center justify-center skew-x-[-45deg] transition ease-in-out delay-50">
          <div className="w-80 h-16 flex items-center justify-center skew-x-[-45deg] border border-white bg-black group-hover:border-blurrRed  transition ease-in-out delay-150">
            <div className=" flex items-center justify-center skew-x-[45deg] border group-hover:border-blurrRed transition ease-in-out delay-250">
              <p className="w-[385px] h-16 flex items-center justify-center group-hover:text-blurrRed group-hover:h-20 transition ease-in-out delay-75">
                all posts...
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
