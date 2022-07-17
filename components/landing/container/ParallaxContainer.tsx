import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
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
        pages={20}
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
                sticky={{ start: 1 + 0.7 * key, end: 6.5 + 0.7 * key }}
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
        <ParallaxLayer
          horizontal={true}
          sticky={{ start: 13, end: 20 }}
          className="flex items-center "
        >
          <ParallaxLayer offset={5} speed={0.36} horizontal={true}>
            <RecentPosts posts={[]} />;
          </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};
