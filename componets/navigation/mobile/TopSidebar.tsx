import Link from "next/link";
import styles from "../../../styles/navigation/Navbar.module.css";
import { WomLink } from "../general/WomLink";

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
          <div></div>
          <div className={styles.topLinkBox}>
            <Link href="/contact">
              <a className={styles.navLinkTop}>CONTACT</a>
            </Link>
          </div>
          <div className={styles.topLinkBoxTwo}>
            <Link href="/legal-notice">
              <a className={styles.navLinkTop}> LEGAL NOTICE </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
