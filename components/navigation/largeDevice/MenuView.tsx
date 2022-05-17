import { useState } from "react";
import { useMousePosition } from "../../../hooks/useMousePosition";
import styles from "../../../styles/navigation/Navbar.module.css";
import { LinkContainer } from "../general/LinkContainer";
import { PreviewBox } from "./PreviewBox";

interface IState {
  openClose: boolean;
  setOpenClose: (openClose: boolean) => void;
}

export type previewType =
  | "boxing"
  | "kickboxing"
  | "muay-thai"
  | "brazilian-jiu-jitsu"
  | "mind"
  | "reviews"
  | "allPosts"
  | "karate"
  | "";

export const MenuView: React.FC<IState> = ({ openClose, setOpenClose }) => {
  const [acticvePreviewType, setActicvePreviewType] = useState<previewType>("");
  const { xPosition, yPosition } = useMousePosition();
  console.log(acticvePreviewType);
  return (
    <div
      id="menuView"
      className={`${styles.navigationMenu} ${
        openClose ? styles.openMenu : styles.closedMenu
      }`}
    >
      {acticvePreviewType && (
        <PreviewBox
          xPosition={xPosition}
          yPosition={yPosition}
          previewType={acticvePreviewType}
        />
      )}
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
