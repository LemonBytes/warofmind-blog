import "../styles/globals.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { WomHeader } from "../components/wrapper/Header";
import { WomFooter } from "../components/wrapper/Footer";
import { appWithTranslation } from "next-i18next";

const WarOfMindApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <WomHeader />
      <Component {...pageProps} />
      <WomFooter />
    </>
  );
};

export default appWithTranslation(WarOfMindApp);
