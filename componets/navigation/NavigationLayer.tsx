import open from "../../public/assets/images/open.png";
import close from "../../public/assets/images/closed.png";
import ippo from "../../public/assets/images/ippo.gif";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navigation/Navbar.module.css";
import { BotSidebar } from "./BotSidebar";
import { TopSidebar } from "./TopSidebar";
import { BlurrLayer } from "./BlurrLayer";
import { MenuView } from "./MenuView";
import { Topbar } from "./Topbar";
import Link from "next/link";

export const NavigationLayer = () => {
  const [openClose, setOpenClose] = useState(false);
  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <div id="navbar">
      <div id="mobileView" className={styles.mobileView}>
        {openClose && <BlurrLayer />}
        <TopSidebar openClose={openClose} />
        <BotSidebar openClose={openClose} />
        <nav id="navigation" className={styles.navigationOpen}>
          <div onClick={openCloseNavi} className={styles.imgContainer}>
            <Image
              width={45}
              height={45}
              className={styles.image}
              src={openClose ? open : close}
              alt={"navigation button"}
            ></Image>
          </div>
        </nav>
      </div>
      <div className={styles.largeView}>
        <div className={styles.navHead}>
          <div onClick={openCloseNavi} id="largeViewHeader">
            <Image
              width={45}
              height={45}
              className={styles.image}
              src={openClose ? open : close}
              alt={"navigation button"}
            ></Image>
          </div>
        </div>
        <Link href="/legal-notice">
          <a id="legalNotice" className={styles.legalLink}>
            LEGAL NOTICE
          </a>
        </Link>
        <Topbar />
        <MenuView openClose={openClose} setOpenClose={setOpenClose} />
      </div>
    </div>
  );
};
