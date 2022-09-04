import { useRouter } from 'next/router';
import { useState } from 'react';
import quotes_de from '../../../public/static/assets/quotes/quotes_de.json';
import quotes_en from '../../../public/static/assets/quotes/quotes_en.json';

interface IQuoteBox {
  fontSize?: string;
  openClose?: boolean;
}

const sendRandomQuote = (language: string | undefined) => {
  let randomNumber: number;
  if (language === 'en') {
    randomNumber = Math.floor(Math.random() * quotes_en.length);
    return quotes_en[randomNumber];
  }
  randomNumber = Math.floor(Math.random() * quotes_de.length);
  return quotes_de[randomNumber];
};

export const QuoteBox: React.FC<IQuoteBox> = ({ fontSize, openClose }) => {
  const router = useRouter();
  const currentLang = router.locale;

  const [quote, setQuote] = useState(sendRandomQuote(currentLang));

  return (
    <div className="overflow-x item-center flex h-full w-full justify-center font-naruto text-white">
      <div
        className={`h-auto w-full flex-col self-center text-base ${fontSize}`}
      >
        <blockquote className="text-center">{quote.text}</blockquote>
        <p>{quote.author}</p>
      </div>
    </div>
  );
};
