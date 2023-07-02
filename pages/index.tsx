import type { NextPage } from 'next';

import { Landing } from '../architecture/core/components/pages/landing/Landing';
import { PostAdapter } from '../architecture/core/adapters/post-adapter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

export interface IPost {
  posts: any;
}

const Home: NextPage<IPost> = ({ posts }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />

        <meta
          name="description"
          content="Blog about Martial Arts and building the mind - Embark on a transformative journey through the realms of martial arts and mental health. Join me as I explore the powerful intersection of mind, body, and spirit, sharing insights, techniques, and resources to enhance your well-being. Discover the profound impact of martial arts on mental resilience and personal growth. Uncover the secrets of mindfulness, stress reduction, and emotional well-being. Together, let's unlock the potential within, empowering ourselves to live a harmonious and fulfilling life."
        ></meta>
        <meta name="" content="all"></meta>
        <title>War of Mind</title>
        <link rel="icon" href="../public/static/assets/images/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4562193178047106"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Landing posts={posts} />
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  const IndexAdapter = new PostAdapter();
  const posts = await IndexAdapter.findLast();

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
export default Home;
