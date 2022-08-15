import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WomHeader } from '../components/Header';

const WarOfMindApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <WomHeader />
      <Component {...pageProps} />
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['navigation'])),
  },
});

export default appWithTranslation(WarOfMindApp);
