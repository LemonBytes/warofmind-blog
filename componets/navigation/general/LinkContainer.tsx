import Link from "next/link";
import styles from "../../../styles/navigation/Navbar.module.css";
import { previewType } from "../largeDevice/MenuView";
import { WomLink } from "./WomLink";

interface IHover {
  setActicvePreviewType?: (string: previewType) => void;
}
const LinkInfos = [
  {
    previewType: "boxing" as previewType,
    linkText: "BOXING",
  },
  {
    previewType: "kickboxing" as previewType,
    linkText: "KICkBOXING",
  },
  {
    previewType: "muay-thai" as previewType,
    linkText: "MUAY THAI",
  },
  {
    previewType: "brazilian-jiu-jitsu" as previewType,
    linkText: "BJJ",
  },
  {
    previewType: "mind" as previewType,
    linkText: "MIND",
  },
  {
    previewType: "reviews" as previewType,
    linkText: "REVIEWS",
  },
  {
    previewType: "allPosts" as previewType,
    linkText: "ALL POSTS",
  },
  {
    previewType: "karate" as previewType,
    linkText: "KARATE",
  },
];

export const LinkContainer: React.FC<IHover> = ({ setActicvePreviewType }) => {
  return (
    <div id="linkCon" className={styles.outerLinkBox}>
      <div className={styles.innerLinkBox}>
        {LinkInfos.map((infos, key) => {
          return (
            <WomLink
              key={key}
              setActicvePreviewType={setActicvePreviewType}
              previewType={infos.previewType}
              linkText={infos.linkText}
            />
          );
        })}
      </div>
    </div>
  );
};
