import { BlurrLayer } from './BlurrLayer';
import { BottomNavigationBrush } from './BottomNavigationBrush';
import { MobileQuoteBar } from './MobileQuoteBar';
import open from '../../../../../public/static/assets/images/open.webp';
import close from '../../../../../public/static/assets/images/closed.webp';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import MenuButton from '../general/MenuButton';

interface IMobileNavigation {
  openCloseNavi: () => void;
  openClose: boolean;
}

export const MobileNavigation: React.FC<IMobileNavigation> = ({
  openCloseNavi,
  openClose,
}) => {
  return (
    <div id="mobileView" className="block md:hidden">
      {openClose && <BlurrLayer />}
      <MobileQuoteBar openClose={openClose} />
      <BottomNavigationBrush
        openCloseNavi={openCloseNavi}
        openClose={openClose}
      />
      <nav id="navigation" className="fixed bottom-[8%] right-[10%] h-20 w-20">
        <MenuButton openCloseNavi={openCloseNavi} openClose={openClose} />
      </nav>
    </div>
  );
};
