import { PageTitle } from "../title/PageTitle";

export const ParallaxContainer = () => {
  return (
    <div className="w-full h-full  grid absolute text-center overflow-visible overflow-y-scroll mb-[4000px]">
      <div className="place-self-center">
        <PageTitle />
      </div>
    </div>
  );
};
