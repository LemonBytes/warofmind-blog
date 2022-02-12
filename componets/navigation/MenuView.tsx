import Link from "next/link";
import styles from "../../styles/navigation/Navbar.module.css";
import { LinkBox } from "./LinkBox";

interface IState {
  openClose: boolean;
}

export const MenuView: React.FC<IState> = ({ openClose }) => {
  return (
    <div
      id="menuView"
      className={openClose ? styles.openMenu : styles.closedMenu}
    >
      <LinkBox />
    </div>
  );
};
