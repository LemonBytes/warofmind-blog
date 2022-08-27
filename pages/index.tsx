import type { NextPage } from 'next';
import { RecentPosts } from '../architecture/presentation/components/RecentPosts';
import styles from '../styles/Home.module.css';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import path from 'path';
import fs from 'fs';
import { WomHeader } from '../architecture/presentation/components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { ParallaxContainer } from '../architecture/presentation/components/ParallaxContainer';
import Link from 'next/link';
import { createClient, SanityClient } from 'next-sanity';
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
  console.log(posts);
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
export default Home;
