import { useState } from "react";
import { useMousePosition } from "../../../hooks/useMousePosition";
import { LinkContainer } from "../general/LinkContainer";
import { PreviewBox } from "./PreviewBox";

interface IState {
  openClose: boolean;
  openCloseNavi: () => void;
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

export const MenuView: React.FC<IState> = ({ openClose, openCloseNavi }) => {
  const [acticvePreviewType, setActicvePreviewType] = useState<previewType>("");
  const { xPosition, yPosition } = useMousePosition();
  return (
    <div
      id="menuView"
      className={`w-screen h-screen relative bg-menuBlack transition-all ease-in-out duration-300 z-30
       ${openClose ? "right-0 top-0" : "-right-full top-0"}`}
    >
      {acticvePreviewType && (
        <PreviewBox
          xPosition={xPosition}
          yPosition={yPosition}
          previewType={acticvePreviewType}
        />
      )}
      <LinkContainer setActicvePreviewType={setActicvePreviewType} />
      <button
        className="w-12 h-12 absolute top-0 right-0 m-2 text-white text-4xl font-large font-naruto"
        onClick={openCloseNavi}
      >
        X
      </button>
    </div>
  );
};
