import styles from "../../styles/navigation/Navbar.module.css";
import { NavigationLayer } from "../navigation/general/NavigationLayer";
export const WomHeader = () => {
  return (
    <header className={styles.head}>
      <NavigationLayer />
    </header>
  );
};
