import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Landing } from '../architecture/core/components/pages/landing/Landing';
import { PostAdapter } from '../architecture/core/adapters/post-adapter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export interface IPost {
  posts: any[];
}

const Home: NextPage<IPost> = ({ posts }) => {
  return <div>{<Landing posts={posts} />}</div>;
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
