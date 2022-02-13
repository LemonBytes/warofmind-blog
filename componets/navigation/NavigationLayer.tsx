import open from "../../public/assets/images/open.png";
import close from "../../public/assets/images/closed.png";
import logo from "../../public/assets/images/logo.jpg";
import ippo from "../../public/assets/images/ippo.gif";
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
        <MenuView openClose={openClose} setOpenClose={setOpenClose} />
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            width={80}
            height={80}
            layout={"fill"}
            objectFit={"cover"}
            alt={"this is an image of the website logo"}
          ></Image>
        </div>
        <div className={styles.navHead}>
          <div
            onClick={openCloseNavi}
            id="largeViewHeader"
            className={styles.brushContainer}
          ></div>
        </div>
        <div className={styles.ippoContainer}>
          <Image src={ippo} width={100} height={200} alt={""}></Image>
        </div>
      </div>
    </div>
  );
};
