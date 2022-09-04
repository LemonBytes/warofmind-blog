import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSanityImageService } from '../services/sanity-image.service';

export const PostCard = ({ post }: any) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  const router = useRouter();
  return (
    <div className="flex h-auto w-full cursor-pointer flex-col rounded border border-[grey]">
      <a onClick={() => router.push('/posts/' + post.slug.current)}>
        <div className="border border-[grey]">
          <Image
            layout="responsive"
            sizes="(max-width: 800px) 100vw, 800px"
            className="top-0 rounded-t"
            width={250}
            height={250}
            alt=""
            src={image.src}
          />
          {/* <div className="z-3 relative bottom-[22px] left-[-18px] h-[35px] w-[35px] rotate-[45deg] border border-blurrRed bg-black">
            <div className="relative h-[35px] w-[35px] rotate-[-45deg] border border-blurrRed bg-black"></div>
          </div> */}
        </div>
        <p className="text-ellipses h-auto w-auto text-center font-naruto text-2xl text-white ">
          {post.title}
        </p>
      </a>
    </div>
  );
};
