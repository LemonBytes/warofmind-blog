import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { RecentPosts } from "../../postcontainer/RecentPosts";
import { PageTitle } from "../title/PageTitle";

export const ParallaxContainer = () => {
  return (
    <Parallax pages={6}>
      <ParallaxLayer
        offset={0}
        speed={0}
        className="gird items-center border border-white "
      >
        <PageTitle />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={2}
        sticky={{ start: 1.3, end: 2.9 }}
        horizontal={true}
        className="flex items-center border border-white"
      >
        <ParallaxLayer
          offset={1.8}
          speed={0.8}
          horizontal={true}
          className="flex items-center border border-white"
        >
          <RecentPosts posts={[]} />;
        </ParallaxLayer>
      </ParallaxLayer>
    </Parallax>
  );
};
