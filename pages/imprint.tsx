import React from 'react';

const LegalNotice = () => {
  return (
    <section className="flex flex-col items-center py-10 text-base">
      <section className="w-[90%]">
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

export default LegalNotice;
