
import React from 'react';
import HistoryImg from './../../img/early-excel.jpg';

const PageHustlerStory = () => (
  <div className="pageWrap page-hustlerStory">
    <div className="wrap">
      <h1>Hustler&#39;s Story</h1>
      <div className="accentBar" />

      <div className="row-offset-1rem">
        <div className="ctr-left">
          <h2>We make the best.</h2>
          <h2>Then, we make it better.</h2>
          <p className="bodyCopy">Hustler’s commitment to purposeful innovation gives you everything you could ask for in a mower, and so much more. </p>
          <p className="bodyCopy">In 1964, we introduced the Hustler, the world’s first zero-turn mower. The Hustler allowed our customers to tackle their lawns in record time, with unparalleled precision. This easy-to-handle, highly maneuverable innovation revolutionized the mower industry, and we’ve been committed to making innovative outdoor power equipment ever since.</p>
        </div>
        <div className="ctr-right">
          <img src={HistoryImg} alt="" className="" />
        </div>
      </div>
    </div>
  </div>
);

export default PageHustlerStory;
