import { useRef, useState } from 'react';
import { PostCardGrid } from '../../cards/PostCardGrid';
import { QuoteBox } from './QuoteBox';
import { PageTitle } from './PageTitle';
import React from 'react';
const { motion } = require('framer-motion');

import useGetDimensions from '../../../hooks/useGetDimensions';

export const Landing = ({ posts }: any) => {
  return (
    <main className="oveflow-hidden flex w-screen  flex-col items-center justify-center">
      <section className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll md:w-[90vw]">
        <section className="h-screen snap-center  pb-[50vh] lg:pb-[0]">
          <PageTitle />
        </section>
        <section className="mb-[50vh] hidden h-screen snap-center  text-center md:flex md:w-full md:items-center md:justify-center ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="h-auto w-[75%] "
          >
            <QuoteBox fontSize="text-3xl lg:text-6xl " />
          </motion.div>
        </section>
        <section className="lg:screen h-screen snap-center md:h-screen lg:flex lg:self-start">
          <PostCardGrid posts={posts} />;
        </section>
      </section>
    </main>
  );
};
