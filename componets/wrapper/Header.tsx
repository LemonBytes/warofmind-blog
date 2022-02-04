import styles from "../../styles/navigation/Navbar.module.css";
import { Navbar } from "../navigation/Navbar";
export const WomHeader = () => {
  return (
    <header className={styles.head}>
      <Navbar />
    </header>
  );
};
