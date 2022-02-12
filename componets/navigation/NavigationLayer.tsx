import open from "../../public/assets/images/open.png";
import close from "../../public/assets/images/closed.png";

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navigation/Navbar.module.css";
import { BotSidebar } from "./BotSidebar";
import { TopSidebar } from "./TopSidebar";
import { BlurrLayer } from "./BlurrLayer";
import { MenuView } from "./MenuView";

export const NavigationLayer = () => {
  const [openClose, setOpenClose] = useState(false);
  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
    console.log("hi");
  };

  return (
    <div id="navbar">
      <div className={styles.mobileView}>
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
        <MenuView openClose={openClose} />
        <div className={styles.navHead}>
          <div
            onClick={openCloseNavi}
            id="largeViewHeader"
            className={styles.brushContainer}
          ></div>
        </div>
      </div>
    </div>
  );
};
