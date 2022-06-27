import Link from "next/link";
import { previewType } from "./MenuView";

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
        onMouseLeave={() => handleMouse("")}
        id="link1"
        className="w-36 h-auto flex items-center justify-center text-center text-2xl text-white p-2 font-medium font-naruto sm:w-[70vw] sm:h-28 sm:justify-start sm:items-start sm:p-5 sm:mt-16 sm:text-4xl"
      >
        {linkText}
      </a>
    </Link>
  );
};
