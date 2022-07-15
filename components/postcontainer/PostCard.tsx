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
    <div className="w-screen h-screen border border-white">
      <a>
        <strong>{title}</strong>
        <Image width={700} height={1000} src={imageLink} alt=""></Image>
      </a>
    </div>
  );
};
