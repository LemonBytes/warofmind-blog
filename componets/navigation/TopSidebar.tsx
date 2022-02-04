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
        <div className={styles.topTitle}>
          <strong>WAR OF MIND</strong>
        </div>
      </div>
    </div>
  );
};
