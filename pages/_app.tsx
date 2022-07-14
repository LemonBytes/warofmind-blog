import "../styles/globals.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { WomHeader } from "../components/wrapper/Header";
import { ParallaxProvider } from "react-scroll-parallax";

import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const WarOfMindApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ParallaxProvider>
      <WomHeader />
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navigation"])),
  },
});

export default appWithTranslation(WarOfMindApp);
