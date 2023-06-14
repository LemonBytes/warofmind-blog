import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { useSanityImageService } from '../../architecture/core/hooks/sanity-image.service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { myPortableTextComponents } from '../../architecture/core/config/PortableTextConfig';
import Head from 'next/head';
import Image from 'next/image';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { PostCardGrid } from '../../architecture/core/components/cards/PostCardGrid';
import { IPostCardProps } from '../../architecture/core/components/cards/PostCard';
import TemplatePost from '../../architecture/core/components/template/TemplatePost';

interface IPost {
  body: any;
  title: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  publishedAt: string;
  topics: string[];
}

interface IPostProps {
  post: IPost;
  locale: string;
  relatedPosts: IPostCardProps[];
}

const PostPage = ({ post, locale, relatedPosts }: IPostProps) => {
  const published = DateTime.fromISO(post.publishedAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  const { t } = useTranslation('common');
  const mainImageSource = useSanityImageService(post?.mainImage.asset._ref);
  const title = post?.title[locale];
  const description = post?.description[locale];
  const postBody = post?.body[locale];
  const associatedPosts = relatedPosts;
  const topics = post.topics;
  return (
    <TemplatePost
      locale={locale}
      mainImageSource={mainImageSource}
      title={title}
      description={description}
      published={published}
      topics={topics}
      postBody={postBody}
      associatedPostsTitle={'related'}
      associatedPosts={associatedPosts}
    />
  );
};

export const getStaticPaths = async ({ locales }: any) => {
  const IndexAdapter = new PostAdapter();
  const posts = await IndexAdapter.findAll();
  const paths = posts.flatMap((post: any) => {
    return locales.map((locale: any) => {
      return {
        params: { slug: post.slug.current },
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
  const SlugAdapter = new PostAdapter();
  const post = await SlugAdapter.findBySlug(params.slug);
  const relatedPosts = await SlugAdapter.findByTopic(post.topics);
  console.log(relatedPosts);
  return {
    props: {
      post,
      relatedPosts,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default PostPage;
