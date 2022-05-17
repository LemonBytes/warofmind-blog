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
        className={`h-72 top-20 left-0 fixed flex items-center font-naruto overflow-hidden bg-brush bg-300 bg-no-repeat bg-farLeft transition-all ${
          openClose ? `w-screen` : `w-0 bg-mediumLeft`
        }`}
      ></div>
    </div>
  );
};
