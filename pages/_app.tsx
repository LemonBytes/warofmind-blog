import "../styles/globals.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { WomHeader } from "../components/wrapper/Header";
import { WomFooter } from "../components/wrapper/Footer";

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
