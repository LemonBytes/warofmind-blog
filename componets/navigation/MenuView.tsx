import styles from "../../styles/navigation/Navbar.module.css";
import { LinkContainer } from "./LinkContainer";

interface IState {
  openClose: boolean;
  setOpenClose: any;
}

export const MenuView: React.FC<IState> = ({ openClose, setOpenClose }) => {
  return (
    <div
      id="menuView"
      className={`${styles.navigationMenu} ${
        openClose ? styles.openMenu : styles.closedMenu
      }`}
    >
      <LinkContainer />
      <div
        className={styles.closeButton}
        onClick={() => setOpenClose(!openClose)}
      >
        X
      </div>
    </div>
  );
};
