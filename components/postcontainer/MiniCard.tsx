import Image from "next/image";
import styles from "../../styles/cards/Cards.module.css";
import test from "../../assets/test.jpg";
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
    <div className={styles.minicards}>
      <a>
        <strong>{title}</strong>
        <Image width={200} height={120} src={test} alt=""></Image>
      </a>
    </div>
  );
};
