
import React from 'react';
import HistoryImg from './../../img/early-excel.jpg';
import LanguageContext from './../LanguageContext';
import TextStory from './Text-Story';

const PageHustlerStory = () => (
  <LanguageContext>
    {context => (
      <div className="pageWrap page-hustlerStory">
        <div className="wrap">
          <TextStory language={context.language} text="h1" />
          <div className="accentBar" />

          <div className="row-offset-1rem">
            <TextStory language={context.language} text="content" />
            <div className="ctr-right">
              <img src={HistoryImg} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    )}
  </LanguageContext>
);

export default PageHustlerStory;
