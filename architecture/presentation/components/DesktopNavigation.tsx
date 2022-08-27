import Link from 'next/link';
import { MenuView } from './MenuView';
import Image from 'next/image';
import open from '../../../public/static/assets/images/open.png';
import close from '../../../public/static/assets/images/closed.png';

import { useTranslation } from 'next-i18next';

interface IDesktopNavigation {
  openCloseNavi: () => void;
  openClose: boolean;
}

export const DesktopNavigation: React.FC<IDesktopNavigation> = ({
  openCloseNavi,
  openClose,
}) => {
  const { t } = useTranslation('navigation');
  return (
    <div className="hidden sm:fixed sm:top-0 sm:right-0 sm:z-40 sm:flex sm:h-screen sm:w-[10vw]">
      <Link href="/contact">
        <a
          id="contactME"
          className="absolute right-0 cursor-pointer p-4
          font-naruto text-xl text-white"
        >
          {t('contact')}
        </a>
      </Link>
      <div className="absolute right-5 z-40 flex h-screen w-20 cursor-pointer items-center justify-center self-center">
        <button className="absolute" onClick={openCloseNavi} id="openMenu">
          <Image
            width={250}
            height={250}
            src={openClose ? open : close}
            alt={'navigation button'}
            role="button "
          ></Image>
        </button>
      </div>
      <Link href="/legal-notice">
        <a
          id="legalNotice"
          className="absolute right-0 flex cursor-pointer self-end justify-self-end p-5 p-4
           font-naruto text-xl text-white"
        >
          {t('legalNotice')}
        </a>
      </Link>
      <MenuView openClose={openClose} openCloseNavi={openCloseNavi} />
    </div>
  );
};
