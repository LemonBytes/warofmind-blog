import { IPost } from '../../../../pages';
import { AllPostsLink } from '../AllPostsButton';
import { PostCard } from './PostCard';

export const RecentPosts = ({ posts }: any) => {
  return (
    <section className="flex h-screen w-full flex-col items-center border">
      <div className="m-10 grid w-full items-start justify-around">
        <div className="gap-y-30 grid lg:grid-cols-3 lg:gap-5 ">
          {posts.map((post: any, key: number) => {
            return <PostCard key={key} post={post} />;
          })}
        </div>
      </div>
      <AllPostsLink />
    </section>
  );
};
