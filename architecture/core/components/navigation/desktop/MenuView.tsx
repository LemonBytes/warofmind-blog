import { useState } from 'react';

import { LinkContainer } from '../general/LinkContainer';
import { PreviewBox } from './PreviewBox';
import { useMousePosition } from '../../../hooks/useMousePosition';

interface IMenuView {
  openClose: boolean;
  openCloseNavi: () => void;
}

export type previewType =
  | 'boxing'
  | 'kickboxing'
  | 'muay-thai'
  | 'brazilian-jiu-jitsu'
  | 'mind'
  | 'reviews'
  | 'karate'
  | '';

export const MenuView: React.FC<IMenuView> = ({ openClose, openCloseNavi }) => {
  const [acticvePreviewType, setActicvePreviewType] = useState<previewType>('');
  const { xPosition, yPosition } = useMousePosition();
  return (
    <div
      id="menuView"
      className={`absolute h-screen w-screen bg-menuBlack transition-all duration-300 ease-in-out
       ${openClose ? 'right-0 top-0' : 'right-[-100vw] top-0'}`}
    >
      {acticvePreviewType && (
        <PreviewBox
          xPosition={xPosition}
          yPosition={yPosition}
          previewType={acticvePreviewType}
        />
      )}
      <LinkContainer
        openCloseNavi={openCloseNavi}
        setActicvePreviewType={setActicvePreviewType}
      />
    </div>
  );
};
