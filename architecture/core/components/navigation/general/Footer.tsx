import Link from 'next/link';
import React from 'react';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import tiktok from '../../../../public/static/images/icons/tiktok-icon.svg';
import Image from 'next/image';

const Footer = () => {
  const links = [
    { name: 'IMPRINT', href: '/imprint' },
    { name: 'PRIVACY POLICY', href: '/privacy-policy' },
    { name: 'DISCLAIMER', href: '/disclaimer' },
  ];
  return (
    <footer className="relative bottom-0 flex w-screen flex-col-reverse  px-[10%]  md:h-64  md:flex-row">
      <div className="flex w-screen flex-col items-center justify-start border-[0.5px] border-blurrRed md:h-64 md:w-[61vw]">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className=" flex w-full grow items-center border-[0.5px] border-blurrRed pl-2  font-naruto text-4xl  text-white md:text-xl"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex h-32 w-screen items-center justify-evenly self-center justify-self-center border-[0.5px] border-blurrRed md:h-full md:w-[39vw]">
        <Link href="https://www.instagram.com/warofmind_/" target="_blank">
          {/* <InstagramIcon fontSize="large" /> */}
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCVyxWlMFCWjOpe_I05B0kqg"
          target="_blank"
        >
          {/* <YouTubeIcon fontSize="large" /> */}
        </Link>
        <Link href="https://www.tiktok.com/@__war_of_mind__" target="_blank">
          {/* <Image src={tiktok} alt="tiktok" width={25} height={25} /> */}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
