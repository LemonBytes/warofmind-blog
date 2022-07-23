import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useEffect, useRef, useState } from "react";
import { RecentPosts } from "../../postcontainer/RecentPosts";
import { QuoteBox } from "../../quote/QuoteBox";
import { AllPostsButton } from "../buttons/AllPostsButton";

import { PageTitle } from "../titles/PageTitle";

const firstSentences = [
  "Beschreite mit mir den Weg, wie ich über die verschiedensten Kampfkünste lerne.",
  "Eine Reise, in der wir den Ursprung der Künste finden, die wie keine zweiten",
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
  const [height, setHeight] = useState(0);
  const ref: any = useRef(null);
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.clientHeight);
      setHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <section>
      <Parallax
        pages={50}
        style={{
          width: "85vw",
          height: "90vh",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ParallaxLayer offset={0} speed={0}>
          <PageTitle />
        </ParallaxLayer>
        <>
          {firstSentences.map((sentence, key) => {
            return (
              <ParallaxLayer
                className="flex items-start"
                key={key}
                sticky={{ start: 1 + 0.7 * key, end: 3 + 0.3 * key }}
                factor={0.1}
              >
                <div className="w-[100vw] flex items-end text-left font-naruto text-white sm:text-8xl text-2xl">
                  <p
                    ref={ref}
                    style={{
                      paddingTop: `${height * key}px`,
                    }}
                  >
                    {sentence}
                  </p>
                </div>
              </ParallaxLayer>
            );
          })}
          {secondSentences.map((sentence, key) => {
            return (
              <ParallaxLayer
                key={key}
                sticky={{ start: 5 + 0.7 * key, end: 10.8 + 0.7 * key }}
                factor={0.1}
              >
                <div className="w-[100vw] font-naruto text-white sm:text-[5vh] text-2xl">
                  <p style={{ paddingBottom: `${33 * key}` }}>{sentence}</p>
                </div>
              </ParallaxLayer>
            );
          })}
        </>
        {/*  <>
          <ParallaxLayer
            horizontal={true}
            factor={0.1}
            sticky={{ start: 4.5, end: 20 }}
            className="flex items-center"
          >
            <ParallaxLayer
              style={{ paddingTop: `455px` }}
              sticky={{ start: 7.2, end: 16 }}
              horizontal={false}
            >
              <div className="w-[70vw] absolute h-[20px] ml-[-150px] bg-wBrush bg-black bg-contain bg-no-repeat bg-[length:100%_40px]"></div>
            </ParallaxLayer>

            <ParallaxLayer
              style={{
                width: "105vw",
                height: "25px",
                marginTop: `455px`,
                background: "rgb(26,25,25)",
              }}
              offset={2.9}
              speed={0.85}
              horizontal={true}
            ></ParallaxLayer>
            <ParallaxLayer
              style={{
                width: "100vw",
                height: "25px",
                marginTop: `455px`,
                background: "rgb(26,25,25)",
              }}
              offset={7}
              speed={0.75}
              horizontal={true}
            ></ParallaxLayer>
          </ParallaxLayer>
        </> */}

        <ParallaxLayer
          sticky={{ start: 17, end: 20 }}
          className="flex items-center justify-center"
        >
          <QuoteBox fontSize="text-8xl" />
        </ParallaxLayer>
        <>
          <ParallaxLayer horizontal={true} sticky={{ start: 32, end: 40 }}>
            <ParallaxLayer
              className="flex items-center"
              offset={6}
              speed={0.44}
              horizontal={true}
            >
              <RecentPosts posts={[]} />;
            </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
            className="flex items-end justify-center"
            sticky={{ start: 32, end: 40 }}
            speed={0.5}
          >
            <AllPostsButton />
          </ParallaxLayer>
        </>
      </Parallax>
    </section>
  );
};
