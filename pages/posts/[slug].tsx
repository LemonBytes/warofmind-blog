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
  const imageSrc = useSanityImageService(post?.mainImage.asset._ref);

  const published = DateTime.fromISO(post.publishedAt).toLocaleString(
    DateTime.DATETIME_MED
  );

  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{post?.title[locale]}</title>
        <meta name="description" content={post?.description[locale]} />
      </Head>
      <main className="flex h-auto w-screen flex-col items-center font-capriola">
        <div className="z-[-1] h-[20%] w-screen md:h-auto md:w-[80vw]">
          <Image
            className="w-full outline outline-blurrRed md:h-[65vh] "
            alt="main image of the blog post"
            src={imageSrc}
            width={600}
            height={400}
          />
        </div>
        <section className="flex h-auto w-screen flex-col items-center border border-blurrRed  md:w-[80vw] ">
          <div className="flex h-20 w-screen  items-center  justify-between text-white md:w-[80vw]">
            <div className="px-2 font-naruto md:px-5">{published}</div>
            <div className="flex gap-2 px-2 md:px-5">
              {post.topics?.map((topic: string, key: number) => {
                return (
                  <Link
                    key={key}
                    locale={locale}
                    className="text flex border p-1 font-naruto text-xs text-white"
                    href={`${locale}/topics/${topic}`}
                  >
                    {t(topic)}
                  </Link>
                );
              })}
            </div>
          </div>
          <section className="flex w-[90vw] flex-col md:w-[80vw]">
            <div className="self-start py-20 text-white md:px-10">
              <h1 className="p-1 py-2  font-naruto text-4xl ">
                {post?.title[locale] ? post?.title[locale] : ''}
              </h1>
              <h2 className="text md:text w-[90vw] py-2  md:w-[70vw]">
                {post?.description[locale] ? post?.description[locale] : ''}
              </h2>
            </div>
            <div className="flex flex-col items-start text-left text-white md:w-[60vw] md:items-start md:px-12">
              {post?.body[locale] && (
                <PortableText
                  value={[...post?.body[locale]]}
                  components={myPortableTextComponents}
                />
              )}
            </div>
          </section>
        </section>
        <section className="w-screen md:w-[80vw]">
          <h3 className="p-3 py-10 font-naruto text-4xl text-white outline outline-blurrRed">
            {t('related')}
          </h3>
          <PostCardGrid posts={relatedPosts} />
        </section>
      </main>
    </>
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
