import React from 'react';
const disclaimer = () => {
  return (
    <section className="flex h-auto  flex-col items-center border-x border-blurrRed py-10 text-base text-white md:h-[70vh] md:px-[10%]">
      <section className="w-[90%]">
        <div className="md:w-[50%]">
          <strong>
            <span>DISCLAIMER</span>
          </strong>
          <br></br>
          <strong>Last updated: 05.18.2023</strong>
          <br></br>
          <strong>EXTERNAL LINKS DISCLAIMER</strong>
          <br></br>
          <br></br>
          <span>
            <span>The Site</span>
            <span>
               may contain or you may be sent through
              <span>the Site</span>
              <span>links</span>
              <br></br>
            </span>
          </span>
          <span>
             to other websites or content belonging to or originating from third
            parties or links to websites and features in banners or other
            advertising.
            <br></br>
            Such external links are not investigated, monitored, or checked for
            accuracy, adequacy, validity, reliability, availability, or
            completeness by us.
            <br></br>
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
            THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY
            THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR
            FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING.
            <br></br>
            WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
            MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF
            PRODUCTS OR SERVICES.
          </span>
        </div>
      </section>
    </section>
  );
};

export default disclaimer;
