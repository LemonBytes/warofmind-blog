import Link from "next/link";
import { Topbar } from "../general/Topbar";
import { MenuView } from "./MenuView";
import Image from "next/image";
import open from "../../../public/assets/images/open.png";
import close from "../../../public/assets/images/closed.png";
import { useTranslation } from "next-i18next";

interface IDesktopNavigation {
  openCloseNavi: () => void;
  openClose: boolean;
}

export const DesktopNavigation: React.FC<IDesktopNavigation> = ({
  openCloseNavi,
  openClose,
}) => {
  const { t } = useTranslation("navigation");
  return (
    <div className="hidden sm:fixed sm:flex sm:left-0 sm:top-0">
      <Topbar largeView={true} />
      <div className="w-20 h-20 absolute flex items-center justify-center self-center right-5 cursor-pointer">
        <button className="absolute" onClick={openCloseNavi} id="openMenu">
          <Image
            width={250}
            height={250}
            src={openClose ? open : close}
            alt={"navigation button"}
            role="button  "
          ></Image>
        </button>
      </div>
      <Link href="/legal-notice">
        <a
          id="legalNotice"
          className="flex self-end justify-self-end p-5 absolute right-0 text-xl font-naruto
           text-white p-4 cursor-pointer"
        >
          {t("legalNotice")}
        </a>
      </Link>
      <MenuView openClose={openClose} openCloseNavi={openCloseNavi} />
    </div>
  );
};
