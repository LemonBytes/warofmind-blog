import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { previewType } from './MenuView';
import { WomLink } from './WomLink';

interface IHover {
  setActicvePreviewType?: (string: previewType) => void;
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
    previewType: 'muay-thai' as previewType,
    linkText: 'muayThai',
  },

  {
    previewType: 'brazilian-jiu-jitsu' as previewType,
    linkText: 'brazilian-jiu-jitsu',
  },
  {
    previewType: 'karate' as previewType,
    linkText: 'karate',
  },
  {
    previewType: 'mind' as previewType,
    linkText: 'mind',
  },
  {
    previewType: 'reviews' as previewType,
    linkText: 'reviews',
  },
];

export const LinkContainer: React.FC<IHover> = ({ setActicvePreviewType }) => {
  const { t } = useTranslation('navigation');
  return (
    <div
      id="linkCon"
      className="relative inset-x-6 flex h-44 w-96 items-center overflow-x-scroll rounded-3xl px-14  sm:inset-0 sm:right-0 sm:block sm:h-screen sm:w-screen sm:justify-start sm:overflow-visible"
    >
      <div className="-px-9 -m-6 grid h-auto w-auto grid-cols-4 gap-x-40 sm:flex sm:h-screen sm:w-screen sm:flex-col sm:items-start sm:overflow-y-scroll sm:px-4 ">
        {LinkInfos.map((infos, key) => {
          return (
            <div
              key={key}
              style={{ transitionDelay: `${100 + key * 10}` }}
              className="transition-all duration-300 ease-in-out"
            >
              <WomLink
                setActicvePreviewType={setActicvePreviewType}
                previewType={infos.previewType}
                linkText={t(infos.linkText)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
