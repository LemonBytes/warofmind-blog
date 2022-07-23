import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/images/logo.jpg";

import Image from "next/image";
export const LogoContainer = () => {
  return (
    <div className="w-14 h-14">
      <Link href="/" passHref>
        <button className="cursor-pointer">
          <Image
            src={logo}
            width={50}
            height={50}
            objectFit={"cover"}
            alt={"this is an image of the website logo"}
          ></Image>
        </button>
      </Link>
    </div>
  );
};
