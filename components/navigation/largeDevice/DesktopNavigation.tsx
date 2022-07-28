import Link from "next/link";
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
    <nav className="hidden sm:w-[10vw] sm:h-screen sm:fixed sm:flex sm:top-0 sm:right-0 sm:z-40">
      <Link href="/contact">
        <a
          id="contactME"
          className="absolute right-0 text-xl font-naruto
          text-white p-4 cursor-pointer"
        >
          {t("contact")}
        </a>
      </Link>
      <div className="w-20 h-auto absolute  flex items-center justify-center self-center right-5 cursor-pointer z-40">
        <button className="absolute" onClick={openCloseNavi} id="openMenu">
          <Image
            width={250}
            height={250}
            src={openClose ? open : close}
            alt={"navigation button"}
            role="button "
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
    </nav>
  );
};
