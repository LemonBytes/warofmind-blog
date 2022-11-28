import Link from 'next/link';
import { useRouter } from 'next/router';
import { previewType } from './navigation/desktop/MenuView';

interface IWomLink {
  setActicvePreviewType?: (string: previewType) => void;
  previewType: previewType;
  linkText: string;
  openCloseNavi?: () => void;
}

export const WomLink: React.FC<IWomLink> = ({
  setActicvePreviewType,
  previewType,
  linkText,
  openCloseNavi,
}) => {
  const handleMouse = (type: previewType) => {
    if (setActicvePreviewType) setActicvePreviewType(type);
  };
  const router = useRouter();
  const currentLang = router.locale;
  return (
    <Link passHref href={`/topics/${previewType}`} locale={currentLang}>
      <a
        onMouseOver={() => handleMouse(previewType)}
        onMouseLeave={() => handleMouse('')}
        onClick={openCloseNavi}
        className="flex h-auto w-36 items-center justify-center p-1  text-center font-naruto text-2xl font-medium text-white sm:mt-16 sm:h-28 sm:w-[70vw] sm:items-start sm:justify-start sm:p-5 sm:text-4xl  md:w-full"
      >
        <button>{linkText}</button>
      </a>
    </Link>
  );
};
