import Link from 'next/link';
import { previewType } from './navigation/desktop/MenuView';

interface IWomLink {
  setActicvePreviewType?: (string: previewType) => void;
  previewType: previewType;
  linkText: string;
}

export const WomLink: React.FC<IWomLink> = ({
  setActicvePreviewType,
  previewType,
  linkText,
}) => {
  const handleMouse = (type: previewType) => {
    if (setActicvePreviewType) setActicvePreviewType(type);
  };
  return (
    <Link href={`/topics/${previewType}`}>
      <a
        onMouseOver={() => handleMouse(previewType)}
        onMouseLeave={() => handleMouse('')}
        id="link1"
        className="flex h-auto w-36 items-center justify-center p-2 text-center font-naruto text-2xl font-medium text-white sm:mt-16 sm:h-28 sm:w-[70vw] sm:items-start sm:justify-start sm:p-5 sm:text-4xl"
      >
        {linkText}
      </a>
    </Link>
  );
};
