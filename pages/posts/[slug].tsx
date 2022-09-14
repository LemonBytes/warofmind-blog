import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import Image from 'next/image';
import { useSanityImageService } from '../../architecture/core/services/sanity-image.service';
import Link from 'next/link';

const myPortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types

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
      <a href={value.herf} className="cursor-pointer font-capriola underline ">
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

const PostPage = ({ post }: any) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  return (
    <main className="flex h-auto w-screen flex-col items-center lg:p-20">
      <div className="z-[-1] h-[40%] w-screen lg:h-[20%] lg:w-[80vw] lg:border-2 lg:border-white">
        <Image
          sizes="(min-width: 70vw) 100vw, 800px"
          className="border border-white"
          width={800}
          height={400}
          alt=""
          src={image.src}
        />
      </div>

      <section className="flex w-[90vw] flex-col lg:w-[80vw]">
        <div className="self-start py-20 text-white">
          <h1 className="p-2 font-naruto text-4xl lg:text-6xl">{post.title}</h1>
          <h3 className="text p-2 font-naruto lg:text-3xl">
            {post.description}
          </h3>
        </div>
        <article className=" flex h-[100vh] flex-col items-center  text-left text-white lg:w-[40vw] lg:items-start lg:text-2xl">
          <PortableText
            value={[...post.body]}
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

export const getStaticProps = async ({ params }: any) => {
  const SlugAdapter = new PostAdapter();
  const [post] = await SlugAdapter.findBySlug(params.slug);

  return {
    props: { post },
  };
};

export default PostPage;
