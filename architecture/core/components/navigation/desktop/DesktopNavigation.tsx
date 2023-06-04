import Link from 'next/link';
import { MenuView } from './MenuView';
import Image from 'next/image';
import open from '../../../../../public/static/assets/images/open.webp';
import close from '../../../../../public/static/assets/images/closed.webp';
import { useTranslation } from 'next-i18next';
interface IDesktopNavigation {
  openCloseNavi: () => void;
  openClose: boolean;
}

export const DesktopNavigation: React.FC<IDesktopNavigation> = ({
  openCloseNavi,
  openClose,
}) => {
  const { t } = useTranslation('common');
  return (
    <div className="hidden md:fixed md:right-0 md:top-0 md:z-40 md:flex md:h-screen md:w-[10vw]">
      <div className="h-50 absolute right-5 z-40 flex w-20 cursor-pointer items-center justify-center self-center ">
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
      {/* <Link
        href="/legal-notice"
        id="legalNotice"
        className="absolute right-0 cursor-pointer self-end justify-self-end p-3
           font-naruto text-xl text-white"
      >
        {t('legalNotice')}
      </Link> */}
      <MenuView openClose={openClose} openCloseNavi={openCloseNavi} />
    </div>
  );
};
