import Image from "next/image";

export interface IMiniCardPost {
  id: string;
  title: string;
  imageLink: string;
  linkToPost: string;
}

export const MiniCard: React.FC<IMiniCardPost> = ({
  id,
  title,
  imageLink,
  linkToPost,
}) => {
  return (
    <div>
      <a>
        <strong>{title}</strong>
        <Image src={imageLink} alt=""></Image>
      </a>
    </div>
  );
};
