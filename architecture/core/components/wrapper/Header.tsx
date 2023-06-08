import { NavigationLayer } from '../navigation/general/NavigationLayer';

interface IWomHeader {
  children?: React.ReactNode;
}

export const WomHeader: React.FC<IWomHeader> = () => {
  return (
    <>
      <header className="fixed z-50">
        <NavigationLayer />
      </header>
    </>
  );
};
