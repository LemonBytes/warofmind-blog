import { useRef } from 'react';
import { PostCardGrid } from '../../cards/PostCardGrid';
import { QuoteBox } from './QuoteBox';
import { PageTitle } from './PageTitle';
import React from 'react';
const { motion } = require('framer-motion');

export const Landing = ({ posts }: any) => {
  return (
    <main className="flex w-screen flex-col  items-center justify-center ">
      <section className="h-[120vh] w-[90vw] lg:w-[90vw]  ">
        <section>
          <PageTitle />
        </section>
        <section className="hidden  text-left lg:flex lg:h-[150vh] lg:w-full lg:w-full lg:items-center lg:justify-center ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="h-auto w-[85%]"
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
