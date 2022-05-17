import Link from "next/link";
import logo from "../../../public/assets/images/logo.jpg";
import Image from "next/image";
import styles from "../../../styles/navigation/Navbar.module.css";

interface IView {
  largeView?: boolean;
}

export const Topbar: React.FC<IView> = ({ largeView }) => {
  return (
    <div
      id="topbar"
      className="w-screen h-14 fixed flex justify-between bg-transparent"
    >
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
          <a
            id="contactME"
            className="text-xl font-naruto text-white p-4 cursor-pointer "
          >
            CONTACT
          </a>
        </Link>
      )}
    </div>
  );
};
