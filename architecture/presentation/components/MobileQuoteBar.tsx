import Link from 'next/link';
import { QuoteBox } from './QuoteBox';
import { WomLink } from './WomLink';

interface IState {
  openClose: boolean;
}

export const MobileQuoteBar: React.FC<IState> = ({ openClose }) => {
  return (
    <div id="topBar">
      <div
        id="topSideBar"
        className={`fixed top-10 flex h-80 w-screen items-center overflow-hidden bg-brush bg-[length:400%] bg-topBar bg-no-repeat text-center font-naruto transition-all smallPhone:top-0 ${
          openClose ? `left-0` : `left-[-420px]`
        }`}
      >
        <QuoteBox openClose={openClose} />
      </div>
    </div>
  );
};
