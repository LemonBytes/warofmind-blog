import { useState } from "react";
import { DesktopNavigation } from "../largeDevice/LargeNavigation";
import { MobileNavigation } from "../mobile/MobilNavigation";

export const NavigationLayer = () => {
  const [openClose, setOpenClose] = useState(false);

  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <div id="navbar">
      <MobileNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
      <DesktopNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
    </div>
  );
};
