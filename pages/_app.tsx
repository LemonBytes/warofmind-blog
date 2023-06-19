import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WomHeader } from '../architecture/core/components/wrapper/Header';
import Head from 'next/head';
import Footer from '../architecture/core/components/wrapper/Footer';

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
          content="Blog about Martial Arts and building the mind - Embark on a transformative journey through the realms of martial arts and mental health. Join me as I explore the powerful intersection of mind, body, and spirit, sharing insights, techniques, and resources to enhance your well-being. Discover the profound impact of martial arts on mental resilience and personal growth. Uncover the secrets of mindfulness, stress reduction, and emotional well-being. Together, let's unlock the potential within, empowering ourselves to live a harmonious and fulfilling life."
        ></meta>
        <meta name="robots" content="all"></meta>
        <title>War of Mind</title>
        <link rel="icon" href="../public/static/assets/images/favicon.ico" />
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
