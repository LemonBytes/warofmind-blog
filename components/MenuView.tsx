import { useState } from 'react';
import { UseMousePosition } from '../hooks/UseMousePosition';
import { LinkContainer } from './LinkContainer';
import { PreviewBox } from './PreviewBox';

interface IState {
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
  | 'allPosts'
  | 'karate'
  | '';

export const MenuView: React.FC<IState> = ({ openClose, openCloseNavi }) => {
  const [acticvePreviewType, setActicvePreviewType] = useState<previewType>('');
  const { xPosition, yPosition } = UseMousePosition();
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
      <LinkContainer setActicvePreviewType={setActicvePreviewType} />
    </div>
  );
};
