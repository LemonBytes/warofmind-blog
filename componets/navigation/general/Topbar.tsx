import Link from "next/link";
import logo from "../../../public/assets/images/logo.jpg";
import Image from "next/image";
import styles from "../../../styles/navigation/Navbar.module.css";

interface IView {
  largeView?: boolean;
}

export const Topbar: React.FC<IView> = ({ largeView }) => {
  return (
    <div id="topbar" className={styles.largeTopBar}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          width={50}
          height={50}
          objectFit={"cover"}
          alt={"this is an image of the website logo"}
        ></Image>
      </div>
      {largeView && (
        <Link href="/contact">
          <a id="contactME" className={styles.contactLink}>
            CONTACT
          </a>
        </Link>
      )}
    </div>
  );
};
