import { Topbar } from "../general/Topbar";
import { BlurrLayer } from "./BlurrLayer";
import { BotSidebar } from "./BotSidebar";
import { MobileQuoteBar } from "./MobileQuoteBar";
import open from "../../../public/assets/images/open.png";
import close from "../../../public/assets/images/closed.png";
import Image from "next/image";

interface IMobileNavigation {
  openCloseNavi: () => void;
  openClose: boolean;
}

export const MobileNavigation: React.FC<IMobileNavigation> = ({
  openCloseNavi,
  openClose,
}) => {
  return (
    <div id="mobileView" className="sm:hidden block">
      <Topbar />
      {openClose && <BlurrLayer />}
      <MobileQuoteBar openClose={openClose} />
      <BotSidebar openClose={openClose} />
      <nav id="navigation" className="w-20 h-20 fixed bottom-[8%] right-[6%]">
        <div onClick={openCloseNavi}>
          <Image
            width={45}
            height={45}
            src={openClose ? open : close}
            alt={"navigation button"}
          ></Image>
        </div>
      </nav>
    </div>
  );
};
