import { useRef } from 'react';
import { RecentPosts } from './RecentPosts';
import { QuoteBox } from './QuoteBox';
import { AllPostsButton } from './AllPostsButton';
import { PageTitle } from './PageTitle';
import React from 'react';
const { motion, useInView, useScroll } = require('framer-motion');
const firstSentences = [
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

  return (
    <section className="w-[80vw] flex-col items-center self-center border border-white">
      <PageTitle />
      <section className="mb-[50vh] flex h-screen w-full flex-col justify-center text-center">
        <QuoteBox fontSize="xl:text-9xl" />
      </section>
      <section className="mb-[100vh] h-auto w-full flex-col ">
        {firstSentences.map((sentence, key) => {
          return (
            <motion.div
              ref={scrollRef}
              initial={{ x: '-120vw' }}
              whileInView={{ x: '150px' }}
              viewport={{ once: false }}
              transition={{
                type: 'spring',
                stiffness: 35,
                velocity: 40,
              }}
              key={key}
              className=" flex h-auto w-[200vw] items-end text-left font-naruto text-4xl text-white lg:text-8xl xl:text-9xl"
            >
              <p className="w-[87vw]">{sentence}</p>
            </motion.div>
          );
        })}
      </section>
      <section className=" h-screen w-full items-center justify-center border border-white">
        <RecentPosts posts={[]} />;
        <AllPostsButton />
      </section>
    </section>
  );
};
