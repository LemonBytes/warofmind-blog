import Link from "next/link";
import styles from "../../styles/navigation/Navbar.module.css";

interface IState {
  openClose: boolean;
}

export const BotSidebar: React.FC<IState> = ({ openClose }) => {
  return (
    <div>
      {" "}
      <div
        id="botSidebar"
        className={`${styles.sidebar} ${styles.botSidebar} ${
          openClose ? styles.open : styles.closed
        }`}
      >
        <div className={styles.outerLinkBox}>
          <div className={styles.innerLinkBox}>
            <Link href={"/"}>
              <a className={styles.navLink}>
                <strong>ALL POSTS</strong>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.navLink}>
                {" "}
                <strong>BOXING</strong>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.navLink}>
                {" "}
                <strong>KICKBOXING</strong>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.navLink}>
                {" "}
                <strong>MUAY THAI</strong>
              </a>
            </Link>
          </div>
          <div className={styles.innerLinkBox}>
            <Link href={"/"}>
              <a className={styles.navLink}>
                {" "}
                <strong>BJJ</strong>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.navLink}>
                <strong>MIND</strong>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.navLink}>
                {" "}
                <strong>REVIEWS</strong>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.navLink}>
                {" "}
                <strong>CONTACT</strong>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
