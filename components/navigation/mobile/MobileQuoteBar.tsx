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
        className={`w-screen h-80 top-10 smallPhone:top-0 fixed flex items-center font-naruto text-center overflow-hidden bg-brush bg-[length:400%] bg-no-repeat bg-topBar transition-all ${
          openClose ? `left-0` : `left-[-420px]`
        }`}
      >
        <QuoteBox openClose={openClose} />
      </div>
    </div>
  );
};
