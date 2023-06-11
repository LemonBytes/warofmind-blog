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
    <main className="flex h-auto w-screen flex-col items-center justify-center">
      <section className="w-screen scroll-smooth md:w-[80vw]">
        <section className="mb-[100vh] h-screen">
          <PageTitle />
        </section>
        <section className="mb-[75vh] hidden text-center md:flex md:w-full md:items-center md:justify-center ">
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
        <section className="flex w-full">
          <PostCardGrid posts={posts} />;
        </section>
      </section>
    </main>
  );
};
