import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WomHeader } from "../componets/wrapper/Header";
import { WomFooter } from "../componets/wrapper/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WomHeader />
      <Component {...pageProps} />
      <WomFooter />
    </>
  );
}

export default MyApp;
