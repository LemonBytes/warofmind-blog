import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { TopicOverview } from '../../architecture/core/components/pages/topics/TopicsPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { myPortableTextComponents } from '../../architecture/core/config/PortableTextConfig';
import Image from 'next/image';
import TemplatePost from '../../architecture/core/components/template/TemplatePost';

const TopicPage = ({ overview, locale, topic }: any) => {
  const mainImageSource = require(`../../public/static/assets/images/topics/${topic}.jpg`);
  const title = overview[0]?.title[locale];
  const description = overview[0]?.description[locale];
  const postBody = overview[0]?.body[locale];
  const associatedPosts = overview[0]?.post;

  return (
    <TemplatePost
      locale={locale}
      mainImageSource={mainImageSource}
      title={title}
      description={description}
      postBody={postBody}
      associatedPostsTitle={'related'}
      associatedPosts={associatedPosts}
    />
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
