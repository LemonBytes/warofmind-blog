import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { useSanityImageService } from '../../architecture/core/hooks/sanity-image.service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { myPortableTextComponents } from '../../architecture/core/config/PortableTextConfig';
import Head from 'next/head';
import Img from 'next/image';

const PostPage = ({ post, locale }: any) => {
  const imageSrc = useSanityImageService(post.mainImage?.asset._ref);

  return (
    <>
      <Head>
        <title>{post?.title[locale]}</title>
        <meta name="description" content={post?.description[locale]} />
      </Head>
      <main className="flex h-auto w-screen flex-col items-center pb-[150px] lg:p-20">
        <div className="z-[-1] h-[40%] w-screen lg:h-[20%] lg:w-[80vw] lg:border-2 lg:border-white">
          <Img
            className="border border-white"
            width={2000}
            height={1200}
            style={{ width: '50%', height: 'auto' }}
            alt=""
            src={imageSrc}
          />
        </div>
        <section className="flex w-[90vw] flex-col md:w-[80vw]">
          <div className="self-start py-20 text-white">
            <h1 className="p-2 font-naruto text-3xl md:text-4xl">
              {post?.title[locale] ? post?.title[locale] : ''}
            </h1>
            <h2 className="text md:text w-[90vw] py-2 font-naruto md:w-[80vw]">
              {post?.description[locale] ? post?.description[locale] : ''}
            </h2>
          </div>
          <article className="flex h-auto flex-col items-center pl-2 text-left text-white md:w-[60vw] md:items-start">
            {post?.body[locale] && (
              <PortableText
                value={[...post?.body[locale]]}
                components={myPortableTextComponents}
              />
            )}
          </article>
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
  const [post] = await SlugAdapter.findBySlug(params.slug);

  return {
    props: {
      post,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default PostPage;
