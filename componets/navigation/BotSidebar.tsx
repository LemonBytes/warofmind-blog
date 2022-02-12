import Link from "next/link";
import styles from "../../styles/navigation/Navbar.module.css";
import { LinkContainer } from "./LinkContainer";

interface IState {
  openClose: boolean;
}

export const BotSidebar: React.FC<IState> = ({ openClose }) => {
  return (
    <div>
      <div
        id="botSidebar"
        className={`${styles.sidebar} ${styles.botSidebar} ${
          openClose ? styles.open : styles.closed
        }`}
      >
        <LinkContainer />
      </div>
    </div>
  );
};
