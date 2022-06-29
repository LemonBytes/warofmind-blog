import test from "../../assets/test2.png";
import Image from "next/image";
import styles from "../../styles/cards/Cards.module.css";
interface IPostCard {
  id: string;
  title: string;
  imageLink: string;
  linkToPost: string;
  preview: string;
}

export const Card: React.FC<IPostCard> = ({ title, preview, linkToPost }) => {
  return (
    <div className={styles.minicards}>
      <h3>{title}</h3>
      <a>
        <Image width={200} height={120} src={test} alt=""></Image>
      </a>
      <strong>{preview}</strong>
    </div>
  );
};
