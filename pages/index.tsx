import type { NextPage } from "next";
import { Navbar } from "../componets/navigation/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.home}>
      <h1>War of Mind</h1>
    </main>
  );
};

export default Home;
