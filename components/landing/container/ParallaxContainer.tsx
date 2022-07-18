import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { rgb, rgba } from "@react-spring/shared";
import Link from "next/link";
import { useRef } from "react";
import { WomLink } from "../../navigation/largeDevice/WomLink";
import { RecentPosts } from "../../postcontainer/RecentPosts";

import { PageTitle } from "../titles/PageTitle";

const sentences = [
  "Beschreite mit mir den Weg, wie ich über die verschiedensten Kampfkünste lerne.",
  "Eine Reise, in der wir den Ursprung der Künste finden, die wie keine zweiten",
  "Körper und Geist an ihre Grenzen treibt, um sie dort zu vereinen.",
  "Wir werden über verschiedene Techniken und die besten Praktiken stolpern.",
  "Von Boxen bis zu Brasilien Jiu-Jitsu, aus deinem Haus bis in die Trainingshallen.",
  "Wissenswertes über den Verstand und Erfahrungsberichte über Trainingsequipments.",
  "Nur disziplinierter Kämpfer geht mit einem Sieg aus dem War of Mind.",
];

export const ParallaxContainer = () => {
  const ref = useRef();
  return (
    <section>
      <Parallax
        pages={40}
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
          {sentences.map((sentence, key) => {
            return (
              <ParallaxLayer
                key={key}
                sticky={{ start: 1 + 0.7 * key, end: 11.8 + 0.7 * key }}
                factor={0.1}
              >
                <div
                  style={{ paddingTop: `${150 + 40 * key}px` }}
                  className="flex font-naruto text-white text-3xl ml-[100px]"
                >
                  <p>{sentence}</p>
                </div>
              </ParallaxLayer>
            );
          })}
        </>
        <>
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
        </>

        <ParallaxLayer sticky={{ start: 17, end: 32 }} speed={0.5}>
          <h2 className="absolute right-0 top-5 text-center font-naruto text-white text-4xl">
            recent posts
          </h2>
        </ParallaxLayer>
        <ParallaxLayer horizontal={true} sticky={{ start: 17, end: 33 }}>
          <ParallaxLayer
            className="flex items-center"
            offset={6}
            speed={0.44}
            horizontal={true}
          >
            <RecentPosts posts={[]} />;
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 17, end: 32 }} speed={0.5}>
          <Link href={"/test"}>
            <a className="w-40 absolute bottom-5 text-center font-naruto text-white text-4xl">
              all posts
            </a>
          </Link>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};
