import Link from "next/link";
import { LinkContainer } from "../general/LinkContainer";

interface IState {
  openClose: boolean;
}

export const BotSidebar: React.FC<IState> = ({ openClose }) => {
  return (
    <div>
      <div
        id="botSidebar"
        className={`h-80 bottom-20 right-0 fixed flex items-center font-naruto overflow-hidden bg-brush bg-350
         bg-no-repeat bg-bottBarShown transition-all  ${
           openClose ? `w-screen` : `w-0 `
         } `}
      >
        <LinkContainer />
      </div>
    </div>
  );
};
