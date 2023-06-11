import { BlurrLayer } from './BlurrLayer';
import { BottomNavigationBrush } from './BottomNavigationBrush';

import open from '../../../../../public/static/assets/images/open.webp';
import close from '../../../../../public/static/assets/images/closed.webp';
import Image from 'next/image';
import { QuoteBox } from '../../pages/landing/QuoteBox';
import MenuButton from '../general/MenuButton';
import { MobileQuoteBar } from './MobileQuoteBar';

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
      <nav id="navigation" className="fixed bottom-[5%] right-[8%] h-16 w-16">
        <MenuButton openCloseNavi={openCloseNavi} openClose={openClose} />
      </nav>
    </div>
  );
};
