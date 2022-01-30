import open from "../../assets/open.png";
import close from "../../assets/closed.png";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/navigation/Navbar.module.css";

export const Navbar = () => {
  const [openClose, setOpenClose] = useState(false);
  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };
  const CLOSED = "navigationClosed";
  const OPEN = "navigationOpen";
  const LINECLOSED = "lineClosed";
  const LINEOPEN = "lineOpen";
  return (
    <nav id="navbar">
      <nav className={openClose ? styles[OPEN] : styles[CLOSED]}>
        <div>
          <div className={styles.linkOne}>hallo</div>
          <div className={styles.linkTwo}> kakao</div>
          <div className={styles.linkThree}>suppe</div>
          <div className={styles.linkFour}>tüte</div>
        </div>
      </nav>
      <div onClick={openCloseNavi} className={styles.imgContainer}>
        <Image
          width={50}
          height={50}
          className={styles.image}
          src={openClose ? open : close}
          alt={"hallo"}
        ></Image>
      </div>
    </nav>
  );
};
