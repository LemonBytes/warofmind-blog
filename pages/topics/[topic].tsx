import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { useSanityImageService } from '../../hooks/sanity-image.service';
import Link from 'next/link';
import { TopicOverview } from '../../architecture/core/components/pages/topics/TopicsPage';

const TopicPage = ({ posts, topic }: any) => {
  return (
    <main className="flex h-auto w-screen flex-col items-center lg:p-20">
      <h1 className="font-naruto text-8xl text-white">{topic}</h1>
      <TopicOverview posts={posts} />
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
  const posts = await TopicAdapter.findByTopic(params.topic);
  console.log(params);
  return { props: { posts: posts, topic: params.topic } };
};

export default TopicPage;
