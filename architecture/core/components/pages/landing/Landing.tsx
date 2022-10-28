import { useRef, useState } from 'react';
import { PostCardGrid } from '../../cards/PostCardGrid';
import { QuoteBox } from './QuoteBox';
import { PageTitle } from './PageTitle';
import React from 'react';
const { motion } = require('framer-motion');

import useGetDimensions from '../../../hooks/useGetDimensions';
import AestheticSquare from '../../squares/AestheticSquare';

const createRandomSqaure = (width: number, height: number) => {
  console.log(width < 600);
  let sizeRange = width < 600 ? 5 : 12;

  const size = Math.floor(Math.random() * sizeRange) + 1;
  const xPosition = Math.floor((Math.random() * width) / 0.8) + 1;
  const yPosition = Math.floor(Math.random() * height) + 1;
  const rotation = Math.floor(Math.random() * 45) + 1;
  return { size, xPosition, yPosition, rotation };
};

export const Landing = ({ posts }: any) => {
  const { width, height } = useGetDimensions();
  const sqaures = [];

  if (width && height) {
    let sqaureAmount = width < 600 ? 150 : 300;
    for (let i = 0; i < sqaureAmount; i++) {
      const { size, xPosition, yPosition, rotation } = createRandomSqaure(
        width,
        height * 4
      );
      sqaures.push({ size, xPosition, yPosition, rotation });
    }
  }

  return (
    <main className="flex w-screen flex-col  items-center justify-center ">
      <section className="h-[150vh] w-[90vw] ">
        <section className="h-[150vh  pb-[50vh] lg:pb-[0]">
          {sqaures.map((square, key: number) => {
            return (
              <AestheticSquare
                key={key}
                size={square.size}
                position={{
                  x: square.xPosition,
                  y: square.yPosition,
                }}
                rotation={square.rotation}
                screenHeight={height}
              />
            );
          })}
          <PageTitle />
        </section>
        <section className="hidden text-center md:flex md:h-[150vh] md:w-full md:items-center md:justify-center ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="h-auto w-[75%] "
          >
            <QuoteBox fontSize="text-3xl lg:text-6xl " />
          </motion.div>
        </section>
        <section className="lg:screen lg:flex lg:self-start">
          <PostCardGrid posts={posts} />;
        </section>
      </section>
    </main>
  );
};
