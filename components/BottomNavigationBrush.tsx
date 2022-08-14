import { LinkContainer } from './LinkContainer';

interface IState {
  openClose: boolean;
}

export const BottomNavigationBrush: React.FC<IState> = ({ openClose }) => {
  return (
    <div>
      <div
        id="botSidebar"
        className={`fixed bottom-24 flex h-80 w-screen items-center bg-brush bg-[length:350%] bg-bottBar bg-no-repeat
         font-naruto transition-all smallPhone:bottom-10
          ${openClose ? `right-0` : `right-[-420px]`} `}
      >
        <LinkContainer />
      </div>
    </div>
  );
};
