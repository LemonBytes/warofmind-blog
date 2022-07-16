import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { RecentPosts } from "../../postcontainer/RecentPosts";
import { PageTitle } from "../titles/PageTitle";

const sentences = [
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  /*  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",  */
];

export const ParallaxContainer = () => {
  return (
    <Parallax pages={8}>
      <ParallaxLayer
        offset={0}
        speed={0}
        className="gird items-center border border-white  "
      >
        <PageTitle />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 1, end: 4 }}
        factor={0.1}
        className="pt-5"
      >
        <div className="flex self-center text-white text-3xl ml-[200px] pt-[300px]">
          <p>{sentences[0]}</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1.5, end: 5 }} factor={0.1}>
        <div className="flex self-center text-white text-3xl ml-[200px] pt-[350px]">
          <p>{sentences[0]}</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 2, end: 5 }} factor={0.1}>
        <div className="flex self-center text-white text-3xl ml-[200px] pt-[380px]">
          <p>{sentences[0]}</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 2.5, end: 5 }} factor={0.1}>
        <div className="flex self-center text-white text-3xl ml-[200px] pt-[410px]">
          <p>{sentences[0]}</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        speed={4}
        horizontal={true}
        sticky={{ start: 6, end: 8 }}
        className="flex items-center "
      >
        <ParallaxLayer offset={2} speed={0.3} horizontal={true}>
          <RecentPosts posts={[]} />;
        </ParallaxLayer>
      </ParallaxLayer>
    </Parallax>
  );
};
