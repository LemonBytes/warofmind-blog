import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { WomLink } from '../../architecture/presentation/components/WomLink';

const myPortableTextComponents = {
  marks: {
    link: ({ children, value }: any) => {
      return (
        <WomLink previewType={''} linkText={children}>
          {children}
        </WomLink>
      );
    },
  },
};

const Test = ({ post }: any) => {
  return (
    <section className="flex w-screen flex-col items-center self-center">
      <article className="flex w-[80vw] flex-col items-center border">
        <PortableText
          value={[...post.body]}
          components={myPortableTextComponents}
        />
      </article>
    </section>
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
  console.log(params.slug);
  const SlugAdapter = new PostAdapter();
  const [post] = await SlugAdapter.findBySlug(params.slug);
  console.log(post);
  return {
    props: { post },
  };
};

export default Test;
