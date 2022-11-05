import { PostCard } from './PostCard';

export const PostCardGrid = ({ posts }: any) => {
  return (
    <section className="flex h-full w-full flex-col items-center overflow-y-scroll ">
      <div className="grid w-full items-start justify-around">
        <div className="lg:grid-row-2 z-10 mb-10 grid w-screen gap-y-0 overflow-hidden bg-black lg:w-[80vw] lg:grid-cols-2 lg:gap-0">
          {posts.map((post: any, key: number) => {
            return <PostCard key={key} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
};
