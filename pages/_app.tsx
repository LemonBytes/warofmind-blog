import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WomHeader } from '../architecture/core/components/navigation/general/Header';
import Head from 'next/head';
import nextI18NextConfig from '../next-i18next.config.js';
const WarOfMindApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <WomHeader />
      <Component {...pageProps} />
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'navigation'],
        nextI18NextConfig
      )),
      // Will be passed to the page component as props
    },
  };
}
export default appWithTranslation(WarOfMindApp);
