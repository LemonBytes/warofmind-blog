import { useEffect, useState } from 'react';

const useGetDimensions = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    updateDimensions();
  }, []);

  return { width, height };
};

export default useGetDimensions;
