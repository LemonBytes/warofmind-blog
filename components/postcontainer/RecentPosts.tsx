import { IPost } from "../../pages";
import { IMiniCardPost, PostCard } from "./PostCard";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Das ist ein Titel",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p2",
    title: "Das ist ein Titel",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p3",
    title: "Das ist ein Titel",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p4",
    title: "Das ist ein Titel",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p5",
    title: "Das ist ein Titel",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
  },
  {
    id: "p6",
    title: "Das ist ein Titel",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p7",
    title: "Das ist ein Titel",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
];

export const RecentPosts: React.FC<IPost> = ({ posts }) => {
  return (
    <section className="w-screen h-screen flex items-center">
      <h5>Trending Posts</h5>
      {DUMMY_POSTS.map((post: IMiniCardPost, key: number) => {
        return <PostCard key={key} {...post} />;
      })}
    </section>
  );
};
