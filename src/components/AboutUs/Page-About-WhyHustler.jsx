
import React from 'react';
import LanguageContext from './../LanguageContext';
import TextWhyHustler from './Text-WhyHustler';

const PageWhyHustler = () => (
  <LanguageContext>
    {context => (
      <div className="pageWrap page-whyHustler">
        <div className="wrap">
          <TextWhyHustler language={context.language} text="h1" />
          <div className="accentBar" />
          <TextWhyHustler language={context.language} text="content" />
        </div>
      </div>
    )}
  </LanguageContext>
);

export default PageWhyHustler;
