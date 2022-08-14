import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { WomHeader } from '../components/Header';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LogoContainer } from '../components/LogoContainer';

const WarOfMindApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <LogoContainer />
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
