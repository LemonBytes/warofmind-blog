import { useEffect, useState } from 'react';

const useGetDimensions = () => {
  if (typeof window !== 'undefined') {
    // browser code
  }
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return { width, height };
};

export default useGetDimensions;
