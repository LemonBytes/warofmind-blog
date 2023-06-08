import type { NextPage } from 'next';

import { Landing } from '../architecture/core/components/pages/landing/Landing';
import { PostAdapter } from '../architecture/core/adapters/post-adapter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export interface IPost {
  posts: any;
}

const Home: NextPage<IPost> = ({ posts }) => {
  const { t } = useTranslation('common');
  return (
    <>
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
