import type { NextPage } from "next";
import { Navbar } from "../componets/navigation/Navbar";
import { HotTopic } from "../componets/postcontainer/HotTopic";
import { IMiniCardPost } from "../componets/postcontainer/MiniCard";
import styles from "../styles/Home.module.css";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Das ist ein Titel",
    imageLink: "https://static.addtoany.com/images/dracaena-cinnabari.jpg",
    linkToPost: "tree",
  } as IMiniCardPost,
  {
    id: "p2",
    title: "Das ist ein Titel",
    imageLink: "https://static.addtoany.com/images/dracaena-cinnabari.jpg",
    linkToPost: "tree",
  } as IMiniCardPost,
  {
    id: "p3",
    title: "Das ist ein Titel",
    imageLink: "https://static.addtoany.com/images/dracaena-cinnabari.jpg",
    linkToPost: "tree",
  } as IMiniCardPost,
  {
    id: "p4",
    title: "Das ist ein Titel",
    imageLink: "https://static.addtoany.com/images/dracaena-cinnabari.jpg",
    linkToPost: "tree",
  } as IMiniCardPost,
];

const Home: NextPage = ({ posts }: any) => {
  //console.log(posts);
  return (
    <main className={styles.home}>
      <h1>War of Mind</h1>
      <HotTopic posts={posts} />
    </main>
  );
};

export const getStaticProps = async () => {
  const data = DUMMY_POSTS;

  return {
    props: {
      posts: data,
    },
  };
};

export default Home;
