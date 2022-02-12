import styles from "../../styles/navigation/Navbar.module.css";
import { NavigationLayer } from "../navigation/NavigationLayer";
export const WomHeader = () => {
  return (
    <header className={styles.head}>
      <NavigationLayer />
    </header>
  );
};
