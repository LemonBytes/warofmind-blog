import Image from "next/image";

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
    <div className="w-[350px] h-[700] cursor-pointer m-3">
      <div>
        <a>
          <Image
            className="rounded-t-2xl top-0"
            width={350}
            height={350}
            src={imageLink}
            alt=""
          ></Image>
        </a>
        <div className="w-[75px] h-[75px] relative bottom-[40px] left-[-37px] z-3 rotate-[45deg] bg-black"></div>
      </div>
      <div>
        <h3 className="w-[350px] h-[350] -mt-10 p-5 absolute font-naruto text-2xl text-white text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};
