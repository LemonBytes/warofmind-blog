import { useRef } from 'react';
import { RecentPosts } from './RecentPosts';
import { QuoteBox } from './QuoteBox';
import { AllPostsButton } from './AllPostsButton';
import { PageTitle } from './PageTitle';
import React from 'react';
const { motion, useInView, useScroll } = require('framer-motion');
const sentences = [
  'Beschreite mit mir den Weg, wie ich über verschiedene Kampfkünste lerne...',
  'Eine Reise, in der wir den Ursprung der Künste finden, die wie keine zweite...',
  'Körper und Geist an ihre Grenzen treibt, um sie dort zu vereinen...',
  'Für einen Wachtum das den Kampf bei weitem überschreitet... ',
  'Wir werden auf verschiedene Techniken, Denkensweisen und die besten Praktiken treffen...',
  'Von Boxen und Muay Thai bis zu Brasilien Jiu-Jitsu, aus deinem Haus bis in die Trainingshallen...',
  'Wissenswertes über den Verstand und Erfahrungsberichte über Trainingsequipments...',
  'Denn nur ein disziplinierter Kämpfer geht mit einem Sieg aus dem War of Mind...',
];

export const ParallaxContainer = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({});
  const isInView = useInView(scrollRef, { once: false });

  return (
    <section className="w-[100vw] flex-col items-center">
      <PageTitle />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative  mb-[200px] flex  h-screen w-[80vw] flex-col justify-center border text-center"
      >
        <QuoteBox fontSize="xl:text-7xl lg:text-6xl" />
      </motion.section>
      <div className="mb-100 mb-[200px] h-screen w-[90vw] flex-col">
        {sentences.map((sentence, key) => {
          return (
            <motion.div
              ref={scrollRef}
              initial={{ x: '-120vw' }}
              whileInView={{ x: '150px' }}
              viewport={{ once: false }}
              transition={{
                type: 'spring',
                stiffness: 25,
                velocity: 40,
              }}
              key={key}
              className=" relative flex h-[auto] w-[200vw] items-end  text-left font-naruto text-4xl text-white lg:text-8xl xl:text-8xl"
            >
              <p className="relative w-[80vw]">{sentence}</p>
            </motion.div>
          );
        })}
        <section className="relative ">
          <RecentPosts posts={[]} />;
        </section>
      </div>
    </section>
  );
};
