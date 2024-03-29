import { useTranslation } from 'next-i18next';
import { previewType } from '../desktop/MenuView';
import { WomLink } from '../../WomLink';
import Link from 'next/link';

interface IHover {
  setActicvePreviewType?: (string: previewType) => void;
  openCloseNavi: () => void;
}
const LinkInfos = [
  {
    previewType: 'kickboxing' as previewType,
    linkText: 'kickboxing',
  },
  {
    previewType: 'boxing' as previewType,
    linkText: 'boxing',
  },
  {
    previewType: 'brazilian-jiu-jitsu' as previewType,
    linkText: 'brazilian-jiu-jitsu',
  },
  {
    previewType: 'muay-thai' as previewType,
    linkText: 'muayThai',
  },

  /*  {
    previewType: 'karate' as previewType,
    linkText: 'karate',
  }, */
  {
    previewType: 'mind' as previewType,
    linkText: 'mind',
  },
  {
    previewType: 'reviews' as previewType,
    linkText: 'reviews',
  },
];

export const LinkContainer: React.FC<IHover> = ({
  setActicvePreviewType,
  openCloseNavi,
}) => {
  const { t } = useTranslation('common');
  return (
    <div
      id="linkCon"
      className="w-98 relative inset-x-2 flex h-44 items-center overflow-x-scroll rounded-3xl  md:inset-0 md:right-0 md:block md:h-screen md:w-screen md:justify-start md:overflow-visible md:px-16 md:pb-20"
    >
      <div className=" grid h-auto w-auto grid-cols-4 gap-y-1 gap-x-40  pt-2 md:-m-6 md:flex md:h-screen md:w-screen md:flex-col md:items-start md:gap-y-20 md:overflow-y-scroll md:px-4 md:pt-12">
        <Link
          className="flex h-auto w-36 items-center justify-center p-1  text-center font-naruto text-2xl font-medium text-white sm:mt-16 sm:h-28 sm:w-[70vw] sm:items-start sm:justify-start sm:p-5 sm:text-4xl  md:w-full"
          href={'https://sales.warofmind.com'}
          target="__blank"
          onClick={openCloseNavi}
        >
          SHOP
        </Link>
        {LinkInfos.map((infos, key) => {
          return (
            <div
              key={key}
              style={{ transitionDelay: `${100 + key * 10}` }}
              className="transition-all duration-300 ease-in-out md:w-[85vw]"
            >
              {
                <WomLink
                  openCloseNavi={openCloseNavi}
                  setActicvePreviewType={setActicvePreviewType}
                  previewType={infos.previewType}
                  linkText={t(infos.linkText)}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};
