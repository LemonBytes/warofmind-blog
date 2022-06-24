import Link from "next/link";
import { LinkContainer } from "../general/LinkContainer";

interface IState {
  openClose: boolean;
}

export const BottomNavigationBrush: React.FC<IState> = ({ openClose }) => {
  return (
    <div>
      <div
        id="botSidebar"
        className={`w-screen h-80 bottom-24 smallPhone:bottom-10 fixed flex items-center font-naruto overflow-hidden bg-brush bg-350
         bg-no-repeat bg-bottBarShown transition-all
          ${openClose ? `right-0` : `right-[-420px]`} `}
      >
        <LinkContainer />
      </div>
    </div>
  );
};
