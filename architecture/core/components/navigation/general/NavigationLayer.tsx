import { useState } from 'react';
import { RightSidebar } from '../desktop/RightSidebar';
import { MobileNavigation } from '../mobile/MobilNavigation';
import { LogoContainer } from './LogoContainer';
import { LeftSidebar } from '../desktop/LeftSidebar';

export const NavigationLayer = () => {
  const [openClose, setOpenClose] = useState(false);

  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <section id="navbar">
      {/* <LogoContainer /> */}
      <MobileNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
      <RightSidebar openClose={openClose} openCloseNavi={openCloseNavi} />
      <LeftSidebar />
    </section>
  );
};
