import { IPost } from '../pages';
import { IMiniCardPost, PostCard } from './PostCard';

const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'How is Boxing Scored? The Boxing Point System Explained',
    imageLink: '/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p2',
    title: 'How to Measure Reach in Boxing?',
    imageLink: '/assets/images/box.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p3',
    title: 'Das ist ein Titel wegwegsegawegwa ewegaewgaewaewg qwfqWFQwqWFFQW',
    imageLink: '/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p4',
    title:
      'Wie du deine Konzentration durch Boxen verbessern kannst Wie du deine Konzentration durch Boxen verbessern kannst',
    imageLink: '/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  // {
  //   id: 'p5',
  //   title: 'Das ist ein Titel',
  //   imageLink: '/assets/images/test.jpg',
  //   linkToPost: 'tree',
  // },
];

export const RecentPosts: React.FC<IPost> = ({ posts }) => {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-between">
      <div className="flex items-center justify-center">
        {DUMMY_POSTS.map((post: IMiniCardPost, key: number) => {
          return <PostCard key={key} {...post} />;
        })}
      </div>
      <div className="flex">
        {DUMMY_POSTS.map((post: IMiniCardPost, key: number) => {
          return <PostCard key={key} {...post} />;
        })}
      </div>
    </section>
  );
};
