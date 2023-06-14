/* eslint-disable react/no-unescaped-entities */

import { PostCardGrid } from '../../cards/PostCardGrid';
import { QuoteBox } from './QuoteBox';
import { PageTitle } from './PageTitle';
import React from 'react';
const { motion } = require('framer-motion');
import { useTranslation } from 'next-i18next';

export const Landing = ({ posts }: any) => {
  const { t } = useTranslation('common');

  return (
    <main className="border-box mb-[-26px] flex h-full w-screen flex-col items-center justify-center overflow-x-hidden md:px-[10%]">
      <section>
        <PageTitle />
      </section>
      <section className="hidden w-screen py-[100vh] text-center md:flex md:w-[99%] md:items-center md:justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="h-auto w-[80%] "
        >
          <QuoteBox fontSize="text-3xl lg:text-6xl" />
        </motion.div>
      </section>
      <PostCardGrid posts={posts} />;
    </main>
  );
};
