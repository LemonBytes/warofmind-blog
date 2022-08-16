import { IPost } from '../pages';
import { AllPostsLink } from './AllPostsButton';
import { IMiniCardPost, PostCard } from './PostCard';

const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'How is Boxing Scored? The Boxing Point System Explained',
    imageLink: '/static/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p2',
    title: 'How to Measure Reach in Boxing?',
    imageLink: '/static/assets/images/box.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p3',
    title: 'Das ist ein Titel wegwegsegawegwa ewegaewgaewaewg qwfqWFQwqWFFQW',
    imageLink: '/static/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p4',
    title: 'Wie du deine Konzentration durch Boxen verbessern kannst ',
    imageLink: '/static/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p1',
    title: 'How is Boxing Scored? The Boxing Point System Explained',
    imageLink: '/static/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p2',
    title: 'How to Measure Reach in Boxing?',
    imageLink: '/static/assets/images/box.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p3',
    title: 'Das ist ein Titel wegwegsegawegwa ewegaewgaewaewg qwfqWFQwqWFFQW',
    imageLink: '/static/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p4',
    title: 'Wie du deine Konzentration durch Boxen verbessern kannst ',
    imageLink: '/static/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
  {
    id: 'p4',
    title: 'Wie du deine Konzentration durch Boxen verbessern kannst ',
    imageLink: '/static/assets/images/test.jpg',
    linkToPost: 'tree',
    preview:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
  },
];

export const RecentPosts: React.FC<IPost> = ({ posts }) => {
  return (
    <section className="flex h-screen flex-col items-center">
      <div className="m-10 grid w-full items-start justify-around">
        <div className="grid grid-cols-3 gap-3 gap-y-20">
          {DUMMY_POSTS.map((post: IMiniCardPost, key: number) => {
            return <PostCard key={key} {...post} />;
          })}
        </div>
      </div>
      <AllPostsLink />
    </section>
  );
};
