import Link from "next/link";
import styles from "../../../styles/navigation/Navbar.module.css";
import { previewType } from "../largeDevice/MenuView";

interface IHover {
  setActicvePreviewType?: (string: previewType) => void;
}

export const LinkContainer: React.FC<IHover> = ({ setActicvePreviewType }) => {
  const handleMouse = (type: previewType) => {
    if (setActicvePreviewType) setActicvePreviewType(type);
  };
  return (
    <div id="linkCon" className={styles.outerLinkBox}>
      <div className={styles.innerLinkBox}>
        <Link href="/boxing">
          <a
            onMouseOver={() => handleMouse("boxing")}
            onMouseLeave={() => handleMouse("")}
            id="link1"
            className={styles.navLink}
          >
            BOXING
          </a>
        </Link>
        <Link href="/kickboxing">
          <a
            onMouseOver={() => handleMouse("kickboxing")}
            onMouseLeave={() => handleMouse("")}
            id="link2"
            className={styles.navLink}
          >
            KICKBOXING
          </a>
        </Link>
        <Link href="/muay-thai">
          <a
            onMouseOver={() => handleMouse("muayThai")}
            onMouseLeave={() => handleMouse("")}
            id="link3"
            className={styles.navLink}
          >
            MUAY THAI
          </a>
        </Link>
        <Link href="/brazilian-jiu-jitsu">
          <a
            onMouseOver={() => handleMouse("bjj")}
            onMouseLeave={() => handleMouse("")}
            id="link4"
            className={styles.navLink}
          >
            BJJ
          </a>
        </Link>
        <Link href="/mind">
          <a
            onMouseOver={() => handleMouse("mind")}
            onMouseLeave={() => handleMouse("")}
            id="link5"
            className={styles.navLink}
          >
            MIND
          </a>
        </Link>
        <Link href="/reviews">
          <a
            onMouseOver={() => handleMouse("reviews")}
            onMouseLeave={() => handleMouse("")}
            id="link6"
            className={styles.navLink}
          >
            REVIEWS
          </a>
        </Link>
        <Link href="/all-posts">
          <a
            onMouseOver={() => handleMouse("allPosts")}
            onMouseLeave={() => handleMouse("")}
            id="link7"
            className={styles.navLink}
          >
            ALL POSTS
          </a>
        </Link>
      </div>
    </div>
  );
};
