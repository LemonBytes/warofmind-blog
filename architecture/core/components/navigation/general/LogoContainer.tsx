import Link from 'next/link';
import React from 'react';
import logo from '../../../../../public/static/assets/images/logo.jpg';

import Image from 'next/image';
export const LogoContainer = () => {
  return (
    <div className="fixed h-14 w-14">
      <Link href="/" passHref>
        <button className=" cursor-pointer">
          <Image
            src={logo}
            fill
            alt={'this is an image of the website logo'}
          ></Image>
        </button>
      </Link>
    </div>
  );
};
