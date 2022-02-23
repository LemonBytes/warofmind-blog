import Link from "next/link";
import { previewType } from "../largeDevice/MenuView";
import styles from "../../../styles/navigation/Navbar.module.css";
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
        className={styles.navLink}
      >
        {linkText}
      </a>
    </Link>
  );
};
