import { IPost } from '../../../../pages';
import { AllPostsLink } from '../AllPostsButton';
import { PostCard } from './PostCard';

export const RecentPosts = ({ posts }: any) => {
  return (
    <section className="flex h-screen w-screen flex-col items-center">
      <div className="m-10 grid w-full items-start justify-around">
        <div className="grid gap-y-20 lg:grid-cols-2 lg:gap-0">
          {posts.map((post: any, key: number) => {
            return <PostCard key={key} post={post} />;
          })}
        </div>
      </div>
      <AllPostsLink />
    </section>
  );
};
