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
    <main className="flex w-screen flex-col items-center ">
      <section className="h-auto w-[80vw]">
        <PageTitle />

        <section className="flex h-auto w-full flex-col border pb-[50vw]">
          {sentences.map((sentence, key) => {
            return (
              <motion.div
                ref={scrollRef}
                initial={{ x: '-80vw' }}
                whileInView={{ x: '0vw' }}
                viewport={{ once: false }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  damping: 15,
                  mass: 2,
                }}
                key={key}
                className="h-[auto] w-full w-[160vw] text-left font-naruto text-4xl text-white lg:text-8xl xl:text-9xl"
              >
                <p className="relative w-[80vw]">{sentence}</p>
              </motion.div>
            );
          })}
        </section>
        <section className="flex h-screen w-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-auto"
          >
            <QuoteBox fontSize="xl:text-7xl lg:text-6xl" />
          </motion.div>
        </section>
        <section className="mt-100">
          <RecentPosts posts={[]} />;
        </section>
      </section>
    </main>
  );
};
