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

export interface IPost {
  posts: [];
}

const Home: NextPage<IPost> = ({ posts }) => {
  console.log(posts);
  const router = useRouter();
  return <ParallaxContainer />;
};

const client = createClient({
  projectId: 'cb6cd06x',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post" ]`);
  console.log(posts);
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
export default Home;
