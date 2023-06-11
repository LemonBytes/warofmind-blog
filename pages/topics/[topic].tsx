import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { TopicOverview } from '../../architecture/core/components/pages/topics/TopicsPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { myPortableTextComponents } from '../../architecture/core/config/PortableTextConfig';
import Image from 'next/image';

const TopicPage = ({ overview, locale, topic }: any) => {
  return (
    <>
      <Head>
        <title>{overview[0]?.title[locale]}</title>
        <meta name="description" content={overview[0]?.description[locale]} />
      </Head>
      <main className="flex h-auto w-screen flex-col items-center pb-[250px] pt-40 text-white md:w-[90vw] md:items-start md:p-20">
        <div className="z-[-1] h-[20%] w-screen md:h-auto md:w-[80vw]">
          <Image
            className="w-full border border-white md:h-[65vh] "
            alt="main image of the blog post"
            src={require(`../../public/static/assets/images/topics/${topic}.jpg`)}
            width={600}
            height={400}
          />
        </div>
        {overview[0]?.title[locale] && (
          <h1 className="w-[90vw] font-naruto text-5xl text-white">
            {overview[0]?.title[locale]}
          </h1>
        )}
        <article className="flex h-auto w-[90vw] flex-col items-center text-left  text-white md:w-[50vw] md:items-start  lg:text-xl">
          {overview[0]?.body[locale] ? (
            <PortableText
              value={[...overview[0]?.body[locale]]}
              components={myPortableTextComponents}
            />
          ) : (
            <>ups</>
          )}
        </article>
        <section className="mt-20 flex h-full w-screen flex-col items-center md:w-[100%]">
          {overview[0]?.post && <TopicOverview posts={overview[0]?.post} />}
        </section>
      </main>
    </>
  );
};

export const getStaticPaths = async ({ locales }: any) => {
  const topics = [
    'boxing',
    'kickboxing',
    'muay-thai',
    'brazilian-jiu-jitsu',
    'mind',
    'reviews',
    'karate',
  ];
  const paths = topics.flatMap((topic: any) => {
    return locales.map((locale: any) => {
      return {
        params: { topic: topic },
        locale: locale,
      };
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params, locale }: any) => {
  const TopicAdapter = new PostAdapter();
  const topic = params.topic;
  const overview = await TopicAdapter.findOverview(topic);

  return {
    props: {
      overview,
      locale,
      topic,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default TopicPage;
