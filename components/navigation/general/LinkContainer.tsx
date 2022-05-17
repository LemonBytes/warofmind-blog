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
    linkText: "KICKBOXING",
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
    <div
      id="linkCon"
      className="w-96 h-36 flex items-center absolute overflow-x-scroll inset-x-6 px-14 rounded-3xl sm:w-screen sm:h-screen sm:justify-start sm:block sm:right-0 sm:overflow-visible sm:inset-0"
    >
      <div className="w-auto h-28 grid grid-cols-4 -px-9 -m-6 gap-x-36 gap-y-2  sm:w-screen sm:h-screen sm:flex sm:flex-col sm:items-start sm:overflow-y-scroll sm:px-4">
        {LinkInfos.map((infos, key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <WomLink
                key={key}
                setActicvePreviewType={setActicvePreviewType}
                previewType={infos.previewType}
                linkText={infos.linkText}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
