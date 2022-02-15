import Link from "next/link";
import styles from "../../styles/navigation/Navbar.module.css";

export const LinkContainer = () => {
  return (
    <div className={styles.outerLinkBox}>
      <div className={styles.innerLinkBox}>
        <Link href="/boxing">
          <a className={styles.navLink}>BOXING</a>
        </Link>
        <Link href="/kickboxing">
          <a className={styles.navLink}>KICKBOXING</a>
        </Link>
        <Link href="/muay-thai">
          <a className={styles.navLink}>MUAY THAI</a>
        </Link>
        <Link href="/brazilian-jiu-jitsu">
          <a className={styles.navLink}>BJJ</a>
        </Link>
        <Link href="/mind">
          <a className={styles.navLink}>MIND</a>
        </Link>
        <Link href="/reviews">
          <a className={styles.navLink}>REVIEWS</a>
        </Link>
        <Link href="/all-posts">
          <a className={styles.navLink}>ALL POSTS</a>
        </Link>
      </div>
    </div>
  );
};
