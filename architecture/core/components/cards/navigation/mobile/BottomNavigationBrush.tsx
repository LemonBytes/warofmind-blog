import { LinkContainer } from '../general/LinkContainer';

interface IState {
  openClose: boolean;
  openCloseNavi: () => void;
}

export const BottomNavigationBrush: React.FC<IState> = ({
  openClose,
  openCloseNavi,
}) => {
  return (
    <div>
      <div
        id="botSidebar"
        className={`fixed bottom-16 flex h-80 w-screen items-center bg-brush bg-[length:330%] bg-bottBar bg-no-repeat
         font-naruto transition-all smallPhone:bottom-10
          ${openClose ? `right-0` : `right-[-820px]`} `}
      >
        <LinkContainer openCloseNavi={openCloseNavi} />
      </div>
    </div>
  );
};