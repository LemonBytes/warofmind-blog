import { PostCard, PostCardProps } from './PostCard';

interface IPostCardGridProps {
  posts: PostCardProps[];
}

export const PostCardGrid = ({ posts }: IPostCardGridProps) => {
  const newArray = [...posts];
  newArray.push(posts[0]);
  newArray.push(posts[1]);
  newArray.push(posts[2]);
  newArray.push(posts[0]);
  newArray.push(posts[0]);
  newArray.push(posts[0]);
  newArray.push(posts[1]);
  newArray.push(posts[2]);
  newArray.push(posts[0]);

  return (
    <section className="border-box m-0 grid w-full grid-cols-2 p-0 outline-[0.5px] outline-blurrRed lg:grid-cols-3">
      {newArray.splice(0).map((post: any, index: number) => {
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
