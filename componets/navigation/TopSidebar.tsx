import Image from "next/image";
import logo from "../../assets/logo.jpg";
import styles from "../../styles/navigation/Navbar.module.css";

interface IState {
  openClose: boolean;
}

export const TopSidebar: React.FC<IState> = ({ openClose }) => {
  return (
    <div id="topBar">
      <div
        id="topSideBar"
        className={`${styles.sidebar} ${styles.topSidebar} ${
          openClose ? styles.open : styles.closed
        }`}
      >
        <div>
          <strong>War of Mind</strong>
        </div>
      </div>
      <div
        className={`${styles.topSquare} ${
          openClose ? styles.squareOpen : styles.squareClosed
        }`}
      >
        <div>
          <Image
            width={75}
            height={75}
            className={styles.image}
            src={logo}
            alt={"logo"}
          ></Image>
        </div>
      </div>
    </div>
  );
};
