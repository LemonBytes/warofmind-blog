import { useEffect, useState } from "react";
import styles from "../../../styles/navigation/Navbar.module.css";
import { LinkContainer } from "../general/LinkContainer";

interface IState {
  openClose: boolean;
  setOpenClose: (openClose: boolean) => void;
}

export type previewType = "boxing" | "noPreview";

export const MenuView: React.FC<IState> = ({ openClose, setOpenClose }) => {
  const [acticvePreviewType, setActicvePreviewType] =
    useState<previewType>("noPreview");

  return (
    <div
      id="menuView"
      className={`${styles.navigationMenu} ${
        openClose ? styles.openMenu : styles.closedMenu
      }`}
    >
      <LinkContainer setActicvePreviewType={setActicvePreviewType} />

      <div
        className={styles.closeButton}
        onClick={() => setOpenClose(!openClose)}
      >
        X
      </div>
    </div>
  );
};
