import styles from "../../styles/navigation/Navbar.module.css";
import { LinkContainer } from "./LinkContainer";
import ippo from "../../public/assets/images/ippo.gif";
import Image from "next/image";
interface IState {
  openClose: boolean;
}

export const MenuView: React.FC<IState> = ({ openClose }) => {
  return (
    <div
      id="menuView"
      className={openClose ? styles.openMenu : styles.closedMenu}
    >
      <LinkContainer />
    </div>
  );
};
