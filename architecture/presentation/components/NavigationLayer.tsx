import { useState } from 'react';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobilNavigation';

export const NavigationLayer = () => {
  const [openClose, setOpenClose] = useState(false);

  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <nav id="navbar z-40">
      <MobileNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
      <DesktopNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
    </nav>
  );
};
