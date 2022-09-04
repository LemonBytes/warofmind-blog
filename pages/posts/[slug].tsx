import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { WomLink } from '../../architecture/core/components/WomLink';
import Image from 'next/image';
import { useSanityImageService } from '../../architecture/core/services/sanity-image.service';

const myPortableTextComponents = {
  marks: {},
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }: any) => <h2 className="py-5 text-4xl">{children}</h2>,
    h4: ({ children }: any) => <h2 className="py-5 text-4xl">{children}</h2>,
    // Ex. 2: rendering custom styles
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,

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
    <main className="flex h-auto w-[100vw] flex-col items-center border border-white p-20">
      <div className="h-[20%] w-screen lg:w-[80vw]">
        <Image
          sizes="(min-width: 70vw) 100vw, 800px"
          className="border border-white"
          width={800}
          height={400}
          alt=""
          src={image.src}
        />
      </div>

      <section className="flex w-[80vw] flex-col ">
        <div className="self-start py-20 text-white">
          <h1 className="p-2 text-6xl">{post.title}</h1>
          <h3 className="p-2 text-3xl">{post.description}</h3>
        </div>
        <article className="flex h-[100vh] w-[40vw] flex-col items-start text-left text-2xl text-white">
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
