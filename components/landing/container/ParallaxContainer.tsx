import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { RecentPosts } from "../../postcontainer/RecentPosts";
import { QuoteBox } from "../../quote/QuoteBox";
import { AestheticSquare, ISquare } from "../../squares/AestheticSquare";
import { AllPostsButton } from "../buttons/AllPostsButton";
import { PageTitle } from "../titles/PageTitle";
import { squares } from "./sqaures";

const firstSentences = [
  "Beschreite mit mir den Weg, wie ich über verschiedene Kampfkünste lerne...",
  "Eine Reise, in der wir den Ursprung der Künste finden, die wie keine zweite...",
  "Körper und Geist an ihre Grenzen treibt, um sie dort zu vereinen...",
  "Für einen Wachtum das den Kampf bei weitem überschreitet... ",
];

const secondSentences = [
  "Wir werden auf verschiedene Techniken, Denkensweisen und die besten Praktiken treffen...",
  "Von Boxen und Muay Thai bis zu Brasilien Jiu-Jitsu, aus deinem Haus bis in die Trainingshallen...",
  "Wissenswertes über den Verstand und Erfahrungsberichte über Trainingsequipments...",
  "Denn nur ein disziplinierter Kämpfer geht mit einem Sieg aus dem War of Mind...",
];

export const ParallaxContainer = () => {
  return (
    <section>
      <Parallax
        pages={50}
        style={{
          width: "85vw",
          height: "100vh",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <>
          <ParallaxLayer offset={0} speed={0} sticky={{ start: 0, end: 0.5 }}>
            <PageTitle />
          </ParallaxLayer>
        </>

        <>
          {firstSentences.map((sentence, key) => {
            return (
              <ParallaxLayer
                className="flex items-start"
                key={key}
                sticky={{ start: 1.6 + 0.7 * key, end: 5 + 0.4 * key }}
                offset={1.8 + key / 10}
                speed={0.2}
                factor={0.1}
              >
                <div
                  style={{
                    marginTop: `${9 + 20 * key}vh`,
                  }}
                  className="w-[100vw] flex items-end text-left font-naruto text-white xl:text-6xl lg:text-5xl text-4xl"
                >
                  <p className="bg-black">{sentence}</p>
                </div>
              </ParallaxLayer>
            );
          })}
          {secondSentences.map((sentence, key) => {
            return (
              <ParallaxLayer
                key={key}
                className="flex items-start"
                sticky={{ start: 8 + 0.7 * key, end: 12 + 0.7 * key }}
                factor={0.1}
              >
                <div
                  style={{
                    marginTop: `${9 + 20 * key}vh`,
                  }}
                  className="w-[100vw] bg-black flex items-end text-left text-white font-naruto xl:text-6xl lg:text-5xl text-4xl"
                >
                  <p>{sentence}</p>
                </div>
              </ParallaxLayer>
            );
          })}
        </>

        <ParallaxLayer
          sticky={{ start: 16, end: 20 }}
          className="flex items-center justify-center"
        >
          <QuoteBox fontSize="text-8xl lg:text-6xl" />
        </ParallaxLayer>
        <>
          <ParallaxLayer horizontal={true} sticky={{ start: 23, end: 39 }}>
            <ParallaxLayer
              className="flex items-center"
              offset={6}
              speed={0.33}
              horizontal={true}
            >
              <RecentPosts posts={[]} />;
            </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
            className="flex items-end justify-center"
            sticky={{ start: 23, end: 39 }}
            speed={0.4}
          >
            <AllPostsButton />
          </ParallaxLayer>
        </>
        {squares.map((square, key) => {
          return (
            <ParallaxLayer
              offset={-0.5 + key / 3.5}
              key={key}
              speed={0.1 + key / 200}
            >
              <AestheticSquare
                size={{
                  width: square.size.width,
                  height: square.size.height,
                }}
                position={{
                  x: square.position.x,
                  y: square.position.y,
                }}
                color={square.color}
                rotation={square.rotation}
              />
            </ParallaxLayer>
          );
        })}
      </Parallax>
    </section>
  );
};
