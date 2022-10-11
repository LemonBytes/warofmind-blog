import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { useSanityImageService } from '../../architecture/core/hooks/sanity-image.service';
import Link from 'next/link';
import { TopicOverview } from '../../architecture/core/components/pages/topics/TopicsPage';
import { over } from 'cypress/types/lodash';

const myPortableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="py-5 font-naruto text-2xl lg:text-4xl">{children}</h2>
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

const TopicPage = ({ overview }: any) => {
  return (
    <main className="pb-98 flex h-auto w-[90vw] flex-col items-start text-white md:p-20">
      <h1 className="font-naruto text-6xl text-white">{overview[0].title}</h1>
      <section className="flex h-auto flex-col items-center text-left text-white md:w-[60vw] md:items-start md:pb-72 lg:text-xl">
        <article>
          <PortableText
            value={[...overview[0].body]}
            components={myPortableTextComponents}
          />
        </article>
      </section>
      <section className="h-auto">
        <TopicOverview posts={overview[0].post} />
      </section>
    </main>
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
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const TopicAdapter = new PostAdapter();
  const overview = await TopicAdapter.findByTopic(params.topic);

  return { props: { overview } };
};

export default TopicPage;
