import React from 'react';

const text = `
- Let your plans be dark and impenetrable as night and when you move fall like a thunderbolt
- The truth is not always beautiful nor beautiful words the truth 
- A goal is not always meant to be reached it often serves simply as something to aim at
- Let your plans be dark and impenetrable as night and when you move fall like a thunderbolt
- The truth is not always beautiful nor beautiful words the truth
- A goal is not always meant to be reached it often serves simply as something to aim at`;

interface ISlider {
  position: string;
  animation: string;
  reverseText: boolean;
}

const Slider: React.FC<ISlider> = ({ position, animation, reverseText }) => {
  const textArray = reverseText ? text.split('').reverse() : text.split('');
  return (
    <div className={`relative ${position} h-[75vh] w-20 overflow-hidden`}>
      <div className={`flex h-[19680px] ${animation}  flex-col items-center`}>
        {textArray.map((char: string, index: number) => {
          return (
            <p
              className="font-major p-1 py-2 text-4xl font-thin uppercase text-blurrRed"
              key={index}
            >
              {char}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
