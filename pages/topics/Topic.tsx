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

const Topic = ({ post }: any) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  return (
    <main className="flex h-auto w-screen flex-col items-center lg:p-20">
      <Topic />
    </main>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const SlugAdapter = new PostAdapter();
  const posts = await SlugAdapter.findByTopic(params.topics);

  return {
    props: { posts },
  };
};

export default Topic;
