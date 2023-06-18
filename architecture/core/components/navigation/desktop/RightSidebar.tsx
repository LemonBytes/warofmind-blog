import Link from 'next/link';
import { MenuView } from './MenuView';
import Image from 'next/image';
import open from '../../../../../public/static/assets/images/open.webp';
import close from '../../../../../public/static/assets/images/closed.webp';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import MenuButton from '../general/MenuButton';
import Slider from '../../slider/Slider';

interface IDesktopNavigation {
  openCloseNavi: () => void;
  openClose: boolean;
}

export const RightSidebar: React.FC<IDesktopNavigation> = ({
  openCloseNavi,
  openClose,
}) => {
  const { t } = useTranslation('common');

  return (
    <div className="hidden border border-l-blurrRed md:fixed md:right-0 md:top-0 md:z-40 md:flex md:h-screen md:w-[10vw] md:flex-col md:items-center md:justify-center">
      <div className="h-50 absolute  top-[5%]  z-40 flex w-20 cursor-pointer items-center justify-center self-center">
        <MenuButton openCloseNavi={openCloseNavi} openClose={openClose} />
      </div>
      <Slider
        position={'-bottom-14'}
        animation={'animate-infinite-up'}
        reverseText={false}
      />
      <MenuView openClose={openClose} openCloseNavi={openCloseNavi} />
    </div>
  );
};
