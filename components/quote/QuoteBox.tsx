import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import quotes_de from "../../public/assets/quotes/quotes_de.json";
import quotes_en from "../../public/assets/quotes/quotes_en.json";
interface IQuoteBox {
  openClose?: boolean;
}

const sendRandomQuote = (language: string | undefined) => {
  let randomNumber: number;
  if (language === "en") {
    randomNumber = Math.floor(Math.random() * quotes_en.length);
    return quotes_en[randomNumber];
  }
  randomNumber = Math.floor(Math.random() * quotes_de.length);
  return quotes_de[randomNumber];
};

export const QuoteBox: React.FC<IQuoteBox> = ({ openClose }) => {
  const router = useRouter();
  const currentLang = router.locale;
  const [quote, setQuote] = useState(sendRandomQuote(currentLang));

  // useEffect(() => {
  //   if (!openClose) {
  //     return;
  //   }
  //   setQuote(() => sendRandomQuote(currentLang));
  // }, [[], openClose]);

  return (
    <div className="w-screen h-full overflow-x flex item-center justify-center text-white font-naruto">
      <div className="w-80 h-auto flex-col self-center text-base">
        <blockquote>{quote.text}</blockquote>
        <p>{quote.author}</p>
      </div>
    </div>
  );
};
