import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import Image from 'next/image';
import { useSanityImageService } from '../../architecture/core/hooks/sanity-image.service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const myPortableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="py-5 font-naruto text-2xl lg:text-3xl">{children}</h2>
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

const PostPage = ({ post, locale }: any) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  return (
    <main className="flex h-auto w-screen flex-col items-center pb-[150px] lg:p-20">
      <div className="z-[-1] h-[40%] w-screen lg:h-[20%] lg:w-[80vw] lg:border-2 lg:border-white">
        <Image
          sizes="(min-width: 70vw) 90vw, 800px"
          className="border border-white"
          width={800}
          height={400}
          alt=""
          src={image.src}
        />
      </div>

      <section className="flex w-[90vw] flex-col lg:w-[80vw]">
        <div className="self-start py-20 text-white">
          <h1 className="p-2 font-naruto text-3xl md:text-5xl">
            {post.title[locale]}
          </h1>
          <h3 className="text md:text p-2 font-naruto">
            {post.description[locale]}
          </h3>
        </div>
        <article className="md:text flex h-auto flex-col items-center text-left text-white md:w-[60vw] md:items-start">
          <PortableText
            value={[...post.body[locale]]}
            components={myPortableTextComponents}
          />
        </article>
      </section>
    </main>
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
