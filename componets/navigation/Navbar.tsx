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
    <nav>
      <nav className={styles.navigation}>
        <div onClick={openCloseNavi}>
          <Image
            width={40}
            height={40}
            className={styles.image}
            src={openClose ? open : close}
            alt={"hallo"}
          ></Image>
        </div>
        <div>Logo</div>
      </nav>
      {openClose ? <Sidebar /> : <div></div>}
    </nav>
  );
};
