import { useScroll } from 'framer-motion';
import React, { ReactElement, useRef } from 'react';

interface ISTicky {
  children: ReactElement;
}

const StickySection: React.FC<ISTicky> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ['end end'],
  });

  return (
    <section className="h-screen">
      <div ref={ref}></div>
    </section>
  );
};
