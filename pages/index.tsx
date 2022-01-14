import type { NextPage } from "next";

import { TrendingPosts } from "../componets/postcontainer/TrendigPosts";

import styles from "../styles/Home.module.css";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import path from "path";
import fs from "fs";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Das ist ein Titel",
    imageLink: "../../assets/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p2",
    title: "Das ist ein Titel",
    imageLink: "/../assets/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p3",
    title: "Das ist ein Titel",
    imageLink: "/../assets/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p4",
    title: "Das ist ein Titel",
    imageLink: "/../assets/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p5",
    title: "Das ist ein Titel",
    imageLink: "/../assets/test.jpg",
    linkToPost: "tree",
  },
  {
    id: "p6",
    title: "Das ist ein Titel",
    imageLink: "/../assets/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p7",
    title: "Das ist ein Titel",
    imageLink: "/../assets/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
];

export interface IPost {
  posts: [];
}

const Home: NextPage<IPost> = ({ posts }) => {
  //console.log(posts);
  return (
    <main className={styles.home}>
      <h1>War of Mind</h1>
      <TrendingPosts posts={posts} />
    </main>
  );
};

// export const getStaticProps = async () => {
//   const data = DUMMY_POSTS;

//   return {
//     props: {
//       posts: data,
//     },
//   };
// };

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
export default Home;
