import { useTranslation } from "next-i18next";
import Link from "next/link";
import { previewType } from "../largeDevice/MenuView";
import { WomLink } from "../largeDevice/WomLink";

interface IHover {
  setActicvePreviewType?: (string: previewType) => void;
}
const LinkInfos = [
  {
    previewType: "boxing" as previewType,
    linkText: "boxing",
  },
  {
    previewType: "kickboxing" as previewType,
    linkText: "kickboxing",
  },
  {
    previewType: "muay-thai" as previewType,
    linkText: "muayThai",
  },
  {
    previewType: "brazilian-jiu-jitsu" as previewType,
    linkText: "bjj",
  },
  {
    previewType: "mind" as previewType,
    linkText: "mind",
  },
  {
    previewType: "reviews" as previewType,
    linkText: "reviews",
  },
  {
    previewType: "allPosts" as previewType,
    linkText: "allPosts",
  },
  {
    previewType: "karate" as previewType,
    linkText: "karate",
  },
];

export const LinkContainer: React.FC<IHover> = ({ setActicvePreviewType }) => {
  const { t } = useTranslation("navigation");
  return (
    <div
      id="linkCon"
      className="w-96 h-36 flex items-center overflow-x-scroll inset-x-6 px-14 rounded-3xl sm:w-screen sm:h-screen sm:justify-start sm:block sm:right-0 sm:overflow-visible sm:inset-0"
    >
      <div className="w-auto h-28 grid grid-cols-4 -px-9 -m-6 gap-x-36 gap-y-2  sm:w-screen sm:h-screen sm:flex sm:flex-col sm:items-start sm:overflow-y-scroll sm:px-4">
        {LinkInfos.map((infos, key) => {
          return (
            <div key={key}>
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
