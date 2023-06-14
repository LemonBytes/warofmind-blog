import { PostCard, IPostCardProps } from './PostCard';

interface IPostCardGridProps {
  posts: IPostCardProps[];
}

export const PostCardGrid = ({ posts }: IPostCardGridProps) => {
  return (
    <section className="border-box grid w-screen grid-cols-2 border border-blurrRed md:w-[80vw] md:grid-cols-3">
      {posts.map((post: any, index: number) => {
        return (
          <PostCard
            key={index}
            post={post}
            gridProps={
              index % 6 == 0
                ? 'lg:col-span-2 lg:row-span-2 col-span-2'
                : 'lg:col-span-1 lg:row-span-1 col-span-2'
            }
          />
        );
      })}
    </section>
  );
};
