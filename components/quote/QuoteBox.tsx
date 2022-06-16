import quotes from "../../public/assets/quotes/quotes_en.json";

export const QuoteBox = () => {
  console.log(quotes[0]);
  return (
    <div className="w-screen h-full overflow-x flex item-center justify-center text-white font-naruto">
      <div className="w-72 h-32 flex-col self-center  text-xl">
        <p>{quotes[63].text}</p>
        <p>{quotes[63].author}</p>
      </div>
    </div>
  );
};
