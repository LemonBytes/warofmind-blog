import { useState } from 'react';
import { DesktopNavigation } from '../desktop/DesktopNavigation';
import { MobileNavigation } from '../mobile/MobilNavigation';
import { LogoContainer } from './LogoContainer';

export const NavigationLayer = () => {
  const [openClose, setOpenClose] = useState(false);

  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <section id="navbar">
      <LogoContainer />
      <MobileNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
      <DesktopNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
    </section>
  );
};
