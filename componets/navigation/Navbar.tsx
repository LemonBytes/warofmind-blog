import open from "../../assets/open.png";
import close from "../../assets/closed.png";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navigation/Navbar.module.css";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [openClose, setOpenClose] = useState(false);
  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <div id="navbar">
      <Sidebar openClose={openClose} />
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
  );
};
