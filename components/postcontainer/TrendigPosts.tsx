import { IPost } from "../../pages";
import { IMiniCardPost, MiniCard } from "./MiniCard";

export const TrendingPosts: React.FC<IPost> = ({ posts }) => {
  return (
    <section>
      <h5>Trending Posts</h5>
      <div>
        {posts.map((post: IMiniCardPost, key: number) => {
          return <MiniCard key={key} {...post} />;
        })}
      </div>
    </section>
  );
};
