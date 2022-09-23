import { IPost } from '../../../../pages';
import { AllPostsLink } from '../AllPostsButton';
import { PostCard } from './PostCard';

export const PostCardGrid = ({ posts }: any) => {
  return (
    <section className="flex h-screen w-full flex-col items-center ">
      <div className="m-10 grid w-full items-start justify-around">
        <div className="lg:grid-row-2 grid w-screen gap-y-0 overflow-hidden lg:w-[80vw] lg:grid-cols-2 lg:gap-0">
          {posts.map((post: any, key: number) => {
            return <PostCard key={key} post={post} />;
          })}
        </div>
      </div>
      <AllPostsLink />
    </section>
  );
};
