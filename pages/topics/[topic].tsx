import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { useSanityImageService } from '../../architecture/core/hooks/sanity-image.service';
import Link from 'next/link';
import { TopicOverview } from '../../architecture/core/components/pages/topics/TopicsPage';

import router from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const myPortableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="py-5 font-naruto text-2xl md:text-3xl">{children}</h2>
    ),
    h4: ({ children }: any) => <h4 className="py-5 text-2xl">{children}</h4>,
    // Ex. 2: rendering custom styles
    normal: ({ children }: any) => (
      <p className="py-3 font-capriola">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer font-capriola underline "
      >
        {children}
      </a>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="mt-xl pl-5">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg pl-5">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <li className="py-3" style={{ listStyleType: 'disclosure-closed' }}>
        {children}
      </li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
  },
};

const TopicPage = ({ overview, locale }: any) => {
  return (
    <>
      {overview && (
        <main className="flex h-auto w-screen flex-col items-center pb-[250px] pt-40 text-white md:p-20">
          {overview[0]?.title[locale] && (
            <h1 className="p-9 font-naruto text-6xl text-white">
              {overview[0]?.title[locale]}
            </h1>
          )}

          <section className="flex w-[90vw] flex-col lg:w-[80vw]">
            <article className="flex h-auto flex-col items-center text-left text-white md:w-[60vw] md:items-start lg:text-xl">
              {overview[0]?.body[locale] ? (
                <PortableText
                  value={[...overview[0]?.body[locale]]}
                  components={myPortableTextComponents}
                />
              ) : (
                <>ups</>
              )}
            </article>
          </section>
          <section className="flex h-auto w-screen flex-col items-center md:w-[80%]">
            {overview[0]?.post && <TopicOverview posts={overview[0]?.post} />}
          </section>
        </main>
      )}
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
  const overview = await TopicAdapter.findByTopic(params.topic);
  console.log(overview[0].title[locale]);
  return {
    props: {
      overview,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default TopicPage;
