import open from "../../assets/open.png";
import close from "../../assets/closed.png";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navigation/Navbar.module.css";
import { BotSidebar } from "./BotSidebar";
import { TopSidebar } from "./TopSidebar";
import { BlurrLayer } from "./BlurrLayer";
import { LinkBox } from "./LinkBox";

export const Navbar = () => {
  const [openClose, setOpenClose] = useState(false);
  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
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
        <div className={styles.navHead}>
          <div className={styles.brusContainer}>
            <LinkBox />
          </div>
        </div>
      </div>
    </div>
  );
};
