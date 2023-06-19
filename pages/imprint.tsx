import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const LegalNotice = () => {
  return (
    <section className="flex h-screen flex-col items-center border-x border-blurrRed py-10 text-xl text-white md:px-[12%]">
      <section className="flex w-[90%] flex-col">
        <h1 className="text-2xl ">Legal Notice</h1>
        <h2 className="py-3 text-xl">Information according to &sect; 5 TMG</h2>
        <p>
          Michele Ayadi
          <br />
          Glash&uuml;ttenstra&szlig;e, 11
          <br />
          51143 Cologne
        </p>
        <div className="py-3">
          <h2 className="text-xl">Contact</h2>
          <p>E-Mail: wyzbits@gmail.com</p>
          <h2>Editorial responsibility</h2>
          <p>Operator of the website</p>
        </div>
        <p>
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p>
      </section>
    </section>
  );
};

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default LegalNotice;
