import { useTranslation } from 'next-i18next';
import { previewType } from '../desktop/MenuView';
import { WomLink } from '../../WomLink';

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
  const { t } = useTranslation('common');
  return (
    <div
      id="linkCon"
      className="w-98 relative inset-x-4 flex h-44 items-center overflow-x-scroll rounded-3xl  lg:inset-0 lg:right-0 lg:block lg:h-screen lg:w-screen lg:justify-start lg:overflow-visible lg:px-16 lg:pb-20"
    >
      <div className="lg:-px-9 grid h-auto w-auto grid-cols-4 gap-x-40 lg:-m-6 lg:flex lg:h-screen lg:w-screen lg:flex-col lg:items-start lg:overflow-y-scroll lg:px-4">
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
