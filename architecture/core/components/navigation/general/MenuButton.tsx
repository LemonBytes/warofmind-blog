import React from 'react';
import Image from 'next/image';
import open from '../../../../../public/static/assets/images/open.webp';
import close from '../../../../../public/static/assets/images/closed.webp';

interface IMenuButton {
  openCloseNavi: () => void;
  openClose: boolean;
  stylingButton?: string;
}

const MenuButton: React.FC<IMenuButton> = ({
  openCloseNavi,
  openClose,
  stylingButton,
}) => {
  return (
    <button
      className={`${stylingButton}  hover:animate-none md:animate-pulse `}
      onClick={openCloseNavi}
    >
      <Image
        width={250}
        height={250}
        src={openClose ? open : close}
        alt={'menu button'}
      ></Image>
    </button>
  );
};

export default MenuButton;
