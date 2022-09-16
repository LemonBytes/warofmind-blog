import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSanityImageService } from '../../services/sanity-image.service';

export const PostCard = ({ post }: any) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  const router = useRouter();
  return (
    <div className="flex h-auto w-full cursor-pointer flex-col rounded border border-[grey]">
      <a onClick={() => router.push('/posts/' + post.slug.current)}>
        <div className="border border-[grey]">
          <Image
            layout="responsive"
            sizes="(max-width: 1200px) 100vw, 800px"
            className="top-0 rounded-t"
            width={900}
            height={600}
            alt=""
            src={image.src}
          />
        </div>
        <p className="text-ellipses h-auto w-auto text-center font-naruto text-2xl text-white ">
          {post.title}
        </p>
      </a>
    </div>
  );
};
