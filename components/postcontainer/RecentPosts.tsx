import { IPost } from "../../pages";
import { IMiniCardPost, PostCard } from "./PostCard";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "How is Boxing Scored? The Boxing Point System Explained",
    imageLink: "/assets/images/test.jpg",
    linkToPost: "tree",
    preview:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
  },
  {
    id: "p2",
    title: "How to Measure Reach in Boxing?",
    imageLink: "/assets/images/box.jpg",
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
    <section className="w-[200vw] h-auto flex items-center justify-evenly -mt-40">
      {DUMMY_POSTS.map((post: IMiniCardPost, key: number) => {
        return <PostCard key={key} {...post} />;
      })}
    </section>
  );
};
