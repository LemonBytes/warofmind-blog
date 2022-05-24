import ippo from "../../public/assets/images/ippo.gif";
import { useState } from "react";
import { LargeNavigation } from "../largeDevice/LargeNavigation";
import { MobileNavigation } from "../mobile/MobilNavigation";

export const NavigationLayer = () => {
  const [openClose, setOpenClose] = useState(false);

  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <div id="navbar">
      <MobileNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
      <LargeNavigation openClose={openClose} openCloseNavi={openCloseNavi} />
    </div>
  );
};
