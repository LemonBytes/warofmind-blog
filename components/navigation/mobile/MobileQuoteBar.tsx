import Link from "next/link";
import { QuoteBox } from "../../quote/QuoteBox";
import { WomLink } from "../largeDevice/WomLink";

interface IState {
  openClose: boolean;
}

export const MobileQuoteBar: React.FC<IState> = ({ openClose }) => {
  return (
    <div id="topBar">
      <div
        id="topSideBar"
        className={`h-80 top-10 left-0 fixed flex items-center font-naruto text-center overflow-hidden bg-brush bg-450 bg-no-repeat bg-topBarHidden transition-all ${
          openClose ? `w-screen` : `w-0 bg-topBarShown`
        }`}
      >
        <QuoteBox />
      </div>
    </div>
  );
};
