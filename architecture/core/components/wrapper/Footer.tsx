import Link from 'next/link';
import React from 'react';
import youtubeIcon from '../../../../public/static/assets/images/youtube.svg';
import instagramIcon from '../../../../public/static/assets/images/instagram.svg';
import tiktokIcon from '../../../../public/static/assets/images/tiktok.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const links = [
    { name: 'legalNotice', href: '/imprint' },
    { name: 'privacyPolicy', href: '/privacy-policy' },
    { name: 'disclaimer', href: '/disclaimer' },
  ];
  const { t } = useTranslation('common');
  return (
    <footer className="bottom-0 flex  w-screen flex-col-reverse p-0.5 md:h-64 md:flex-row md:p-0 md:px-[10%]">
      <div className="flex w-full  flex-col items-center justify-start  outline outline-blurrRed md:h-64  md:w-[61vw]">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className=" flex w-full grow items-center py-2 pl-2 font-naruto text-3xl text-white outline  outline-blurrRed md:text-4xl"
          >
            {t(link.name)}
          </Link>
        ))}
      </div>
      <div className="flex h-32 w-full  items-center justify-evenly  p-0  outline  outline-blurrRed md:h-full md:w-[39vw]">
        <Link href="https://www.instagram.com/warofmind_/" target="_blank">
          <Image src={instagramIcon} alt="tiktok" width={25} height={25} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCVyxWlMFCWjOpe_I05B0kqg"
          target="_blank"
        >
          <Image src={youtubeIcon} alt="tiktok" width={40} height={40} />
        </Link>
        <Link href="https://www.tiktok.com/@__war_of_mind__" target="_blank">
          <Image src={tiktokIcon} alt="tiktok" width={25} height={25} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
