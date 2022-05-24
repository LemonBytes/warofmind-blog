import Link from "next/link";
import styles from "../../../styles/navigation/Navbar.module.css";
import { WomLink } from "../general/WomLink";

interface IState {
  openClose: boolean;
}

export const MobileQuoteBar: React.FC<IState> = ({ openClose }) => {
  return (
    <div id="topBar">
      <div
        id="topSideBar"
        className={`h-80 top-10 left-0 fixed flex items-center font-naruto overflow-hidden bg-brush bg-450 bg-no-repeat bg-topBarHidden transition-all ${
          openClose ? `w-screen` : `w-0 bg-topBarShown`
        }`}
      ></div>
    </div>
  );
};
