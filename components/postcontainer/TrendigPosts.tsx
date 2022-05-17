import { IPost } from "../../pages";
import { IMiniCardPost, MiniCard } from "./MiniCard";
import styles from "../../styles/cards/Cards.module.css";

export const TrendingPosts: React.FC<IPost> = ({ posts }) => {
  return (
    <section className={styles.trendingContainer}>
      <h5>Trending Posts</h5>
      <div className={styles.trendingSlider}>
        {posts.map((post: IMiniCardPost, key: number) => {
          return <MiniCard key={key} {...post} />;
        })}
      </div>
    </section>
  );
};
