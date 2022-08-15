import { Topbar } from './Topbar';
import { BlurrLayer } from './BlurrLayer';
import { BottomNavigationBrush } from './BottomNavigationBrush';
import { MobileQuoteBar } from './MobileQuoteBar';
import open from '../public/static/assets/images/open.png';
import close from '../public/static/assets/images/closed.png';
import Image from 'next/image';

interface IMobileNavigation {
  openCloseNavi: () => void;
  openClose: boolean;
}

export const MobileNavigation: React.FC<IMobileNavigation> = ({
  openCloseNavi,
  openClose,
}) => {
  return (
    <div id="mobileView" className="block sm:hidden">
      <Topbar />
      {openClose && <BlurrLayer />}
      <MobileQuoteBar openClose={openClose} />
      <BottomNavigationBrush openClose={openClose} />
      <nav id="navigation" className="fixed bottom-[8%] right-[6%] h-20 w-20">
        <div onClick={openCloseNavi}>
          <Image
            width={250}
            height={250}
            src={openClose ? open : close}
            alt={'navigation button'}
          ></Image>
        </div>
      </nav>
    </div>
  );
};
