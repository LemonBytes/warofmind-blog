import styles from "../../styles/navigation/Navbar.module.css";

interface IState {
  openClose: boolean;
}

export const Sidebar: React.FC<IState> = ({ openClose }) => {
  return (
    <div
      id="sidebar"
      className={openClose ? styles.sidebar : styles.closedSideBar}
    ></div>
  );
};
