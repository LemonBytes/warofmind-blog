import type { NextPage } from 'next';
import { RecentPosts } from '../components/RecentPosts';
import styles from '../styles/Home.module.css';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import path from 'path';
import fs from 'fs';
import { WomHeader } from '../components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { ParallaxContainer } from '../components/ParallaxContainer';

import Link from 'next/link';
const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'Das ist ein Titel',
    imageLink: '../../assets/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p2',
    title: 'Das ist ein Titel',
    imageLink: '/../assets/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p3',
    title: 'Das ist ein Titel',
    imageLink: '/../assets/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p4',
    title: 'Das ist ein Titel',
    imageLink: '/../assets/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p5',
    title: 'Das ist ein Titel',
    imageLink: '/../assets/test.jpg',
    linkToPost: 'tree',
  },
  {
    id: 'p6',
    title: 'Das ist ein Titel',
    imageLink: '/../assets/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p7',
    title: 'Das ist ein Titel',
    imageLink: '/../assets/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
];

export interface IPost {
  posts: [];
}

const Home: NextPage<IPost> = ({ posts }) => {
  const router = useRouter();
  return <ParallaxContainer />;
};

export default Home;
