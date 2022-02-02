import Link from "next/link";
import styles from "../../styles/navigation/Navbar.module.css";

interface IState {
  openClose: boolean;
}

export const BotSidebar: React.FC<IState> = ({ openClose }) => {
  return (
    <div
      id="botSidebar"
      className={`${styles.sidebar} ${styles.botSidebar} ${
        openClose ? styles.open : styles.closed
      }`}
    >
      <Link href={"/"}>All Posts</Link>
      <Link href={"/"}>Boxing</Link>
      <Link href={"/"}>Kickboxing</Link>
      <Link href={"/"}>Muay Thai</Link>
      <Link href={"/"}>BJJ</Link>
      <Link href={"/"}>Mind</Link>
      <Link href={"/"}>Reviews</Link>
      <Link href={"/"}>Contact</Link>
    </div>
  );
};
