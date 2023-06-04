import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WomHeader } from '../architecture/core/components/navigation/general/Header';
import Head from 'next/head';
import Footer from '../architecture/core/components/navigation/general/Footer';

const WarOfMindApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Blog about Martial Arts and building the mind - fight like your favorite Fighter - Boxing - Kickboxing - Muay Thai - find Martial Arts equipment on sale"
        ></meta>
        <meta name="robots" content="all"></meta>
        <title>War of Mind</title>
      </Head>
      <WomHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default appWithTranslation(WarOfMindApp);
