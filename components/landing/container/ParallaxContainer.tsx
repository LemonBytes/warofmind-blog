import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { RecentPosts } from "../../postcontainer/RecentPosts";
import { QuoteBox } from "../../quote/QuoteBox";
import { AestheticSquare, ISquare } from "../../squares/AestheticSquare";
import { AllPostsButton } from "../buttons/AllPostsButton";
import { PageTitle } from "../titles/PageTitle";
import squares from "../../../public/assets/squares/squares.json";

const firstSentences = [
  "Beschreite mit mir den Weg, wie ich über die verschiedensten Kampfkünste lerne.",
  "Eine Reise, in der wir den Ursprung der Künste finden, die wie keine zweite",
  "Körper und Geist an ihre Grenzen treibt, um sie dort zu vereinen.",
];

const secondSentences = [
  "Wir werden auf verschiedene Techniken und die besten Praktiken treffen.",
  "Von Boxen bis zu Brasilien Jiu-Jitsu, aus deinem Haus bis in die Trainingshallen.",
  "Wissenswertes über den Verstand und Erfahrungsberichte über Trainingsequipments.",
];

const string =
  "Nur disziplinierter Kämpfer geht mit einem Sieg aus dem War of Mind.";

export const ParallaxContainer = () => {
  const parsedSquares: ISquare[] = JSON.parse(JSON.stringify(squares));

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
          <ParallaxLayer offset={0} speed={0}>
            <PageTitle />
          </ParallaxLayer>
        </>

        <>
          {firstSentences.map((sentence, key) => {
            return (
              <ParallaxLayer
                className="flex items-start"
                key={key}
                sticky={{ start: 1.5 + 0.7 * key, end: 6 + 0.4 * key }}
                offset={1.8 + key / 10}
                speed={0.2}
                factor={0.1}
              >
                <div
                  style={{
                    marginTop: `${22 * key}%`,
                  }}
                  className="w-[100vw] h-auto  flex items-end text-left font-naruto text-white xl:text-8xl lg:text-6xl text-4xl"
                >
                  <p>{sentence}</p>
                </div>
              </ParallaxLayer>
            );
          })}
          {secondSentences.map((sentence, key) => {
            return (
              <ParallaxLayer
                key={key}
                className="flex items-start"
                sticky={{ start: 9 + 0.7 * key, end: 13 + 0.7 * key }}
                factor={0.1}
              >
                <div
                  style={{
                    marginTop: `${33 * key}vh`,
                  }}
                  className="w-[100vw] h-auto flex items-end text-left text-white font-naruto xl:text-8xl lg:text-6xl text-2xl"
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
          <QuoteBox fontSize="text-8xl" />
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
        {parsedSquares.map((square, key) => {
          return (
            <ParallaxLayer
              offset={-0.5 + key / 3}
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
