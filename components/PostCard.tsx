import Image from 'next/image';

export interface IMiniCardPost {
  id: string;
  title: string;
  imageLink: string;
  linkToPost: string;
}

export const PostCard: React.FC<IMiniCardPost> = ({
  id,
  title,
  imageLink,
  linkToPost,
}) => {
  return (
    <div className="m-8 h-[40%] w-[300px] cursor-pointer rounded-t">
      <div>
        <a>
          <Image
            className="top-0 rounded-t"
            width={300}
            height={300}
            src={imageLink}
            alt=""
          ></Image>
        </a>
        <div className="z-3 relative bottom-[22px] left-[-18px] h-[35px] w-[35px] rotate-[45deg] border border-blurrRed bg-black">
          <div className="relative h-[35px] w-[35px] rotate-[-45deg] border border-blurrRed bg-black"></div>
        </div>
      </div>

      <p className="text-ellipses inline-block h-24 w-[300px] overflow-x-hidden text-left font-naruto text-2xl text-white ">
        {title}
      </p>
    </div>
  );
};
