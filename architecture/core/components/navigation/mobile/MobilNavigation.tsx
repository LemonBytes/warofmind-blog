import { BlurrLayer } from './BlurrLayer';
import { BottomNavigationBrush } from './BottomNavigationBrush';
import { MobileQuoteBar } from './MobileQuoteBar';
import open from '../../../../../public/static/assets/images/open.png';
import close from '../../../../../public/static/assets/images/closed.png';
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
    <div id="mobileView" className="block md:hidden">
      {openClose && <BlurrLayer />}
      <MobileQuoteBar openClose={openClose} />
      <BottomNavigationBrush openClose={openClose} />
      <nav id="navigation" className="fixed bottom-[8%] right-[10%] h-20 w-20">
        <button onClick={openCloseNavi}>
          <Image
            width={250}
            height={250}
            src={openClose ? open : close}
            alt={'navigation button'}
          ></Image>
        </button>
      </nav>
    </div>
  );
};
