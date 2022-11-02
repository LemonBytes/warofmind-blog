import type { NextPage } from 'next';

import { Landing } from '../architecture/core/components/pages/landing/Landing';
import { PostAdapter } from '../architecture/core/adapters/post-adapter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import useGetDimensions from '../architecture/core/hooks/useGetDimensions';
import { AestheticSquare } from '../architecture/core/components/squares/AestheticSquare';

export const createRandomSqaure = (
  width: number,
  height: number,
  smallSquare: boolean
) => {
  let sqauareSize = width < 600 ? 4 : 7;
  const size = Math.floor(Math.random() * sqauareSize) + 1;
  const xPosition = Math.floor(Math.random() * width) + 1;
  const yPosition = Math.floor(Math.random() * height) + 1;
  const rotation = Math.floor(Math.random() * 45) + 1;
  return { size, xPosition, yPosition, rotation, smallSquare };
};
export interface IPost {
  posts: any[];
}

const Home: NextPage<IPost> = ({ posts }) => {
  const { width, height } = useGetDimensions();
  const sqaures = [];
  if (width && height) {
    const squareAmount = width < 600 ? 150 : 250;
    for (let i = 0; i < squareAmount; i++) {
      const { size, xPosition, yPosition, rotation, smallSquare } =
        createRandomSqaure(width, height, Math.random() > 0.3);
      sqaures.push({ size, xPosition, yPosition, rotation, smallSquare });
    }
  }

  return (
    <>
      <section className="z-10">
        <Landing posts={posts} />
      </section>

      <section className="absolute top-0 z-0 h-screen">
        {sqaures.map((square, key: number) => {
          return (
            <AestheticSquare
              key={key}
              size={square.size}
              position={{
                x: square.xPosition,
                y: square.yPosition,
              }}
              rotation={square.rotation}
              screenHeight={height}
            />
          );
        })}
      </section>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  const IndexAdapter = new PostAdapter();
  const posts = await IndexAdapter.findLast();

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
export default Home;
