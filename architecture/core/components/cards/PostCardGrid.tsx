import { PostCard } from './PostCard';

export const PostCardGrid = ({ posts }: any) => {
  return (
    <section className="flex h-full w-full flex-col items-center overflow-y-scroll border-2 border-white">
      <div className="grid w-full items-start justify-evenly">
        <div className="gird-col-1 z-10 grid w-full auto-rows-auto gap-y-0 overflow-hidden border-2 border-white bg-black md:w-[80vw] md:grid-cols-2 md:gap-0">
          {posts.map((post: any, key: number) => {
            return <PostCard key={key} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
};
