import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParallaxContainer } from '../architecture/presentation/components/ParallaxContainer';
import { PostAdapter } from '../architecture/core/adapters/post-adapter';

export interface IPost {
  posts: any[];
}

const Home: NextPage<IPost> = ({ posts }) => {
  const router = useRouter();
  return <ParallaxContainer posts={posts} />;
};

export async function getStaticProps() {
  const IndexAdapter = new PostAdapter();
  const posts = await IndexAdapter.findLast();
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
export default Home;
