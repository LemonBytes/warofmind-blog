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
    <div className="m-3 h-[700] w-[25vw] cursor-pointer">
      <div>
        <a>
          <Image
            className="top-0 rounded-t-2xl"
            width={350}
            height={350}
            src={imageLink}
            alt=""
          ></Image>
        </a>
        <div className="z-3 relative bottom-[40px] left-[-37px] h-[75px] w-[75px] rotate-[45deg] bg-black"></div>
      </div>
      <div>
        <h3 className="absolute -mt-10 h-[350] w-[350px] p-5 text-center font-naruto text-2xl text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};
