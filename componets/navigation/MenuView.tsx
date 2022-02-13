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
      className={openClose ? styles.openMenu : styles.closedMenu}
    >
      <button onClick={() => setOpenClose(!openClose)}>X</button>
      <LinkContainer />
    </div>
  );
};
