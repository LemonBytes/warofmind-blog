import Image from 'next/image';

export const PostCard = ({ post }: any) => {
  return (
    <div className="flex h-auto w-full cursor-pointer flex-col rounded border border-[grey]">
      <a href="">
        <div className="border border-[grey]">
          <Image
            layout="responsive"
            sizes="250 450 600"
            className="top-0 rounded-t"
            width={250}
            height={250}
            alt=""
            src={post.mainImage.asset._ref}
          ></Image>
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
