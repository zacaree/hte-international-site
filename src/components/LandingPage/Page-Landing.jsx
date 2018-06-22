import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from './../../img/hero-bg.jpg';
import Btn from './../Btn';
import CTAImg1 from './../../img/cta_hustlerStory.jpg';
import CTAImg2 from './../../img/cta_whyHustler.jpg';
import CTAImg3 from './../../img/cta_dealerPhoto.jpg';
import KeyboardArrowRight from './../../img/KeyboardArrowRight';
import TextHero from './TextHero';
import LanguageContext from './../LanguageContext';


const PageLanding = () => (
  <LanguageContext.Consumer>
    {context => (
      <div className="pageWrap pageLanding">
        <div className="ctr-hero" style={{ backgroundImage: `url(${HeroImg})` }} >
          <TextHero language={context.language} />
          <p>im inside {context.language}</p>
          <Link to="/products">
            <Btn text="See the Lineup" />
          </Link>
        </div>

        <div className="section-cta wrap">
          <div className="row-offset-1rem">
            <div className="cta">
              <Link to="/hustler-story" className="bgImg" style={{ backgroundImage: `url(${CTAImg1})` }} />
              <h2>Hustler&#39;s Story</h2>
              <p>We make the best. Then, we make it better. In 1964, we introduced the Hustler, the world’s first zero-turn mower…</p>
              <Link to="/hustler-story" className="textBtn">
                <h3>Learn More</h3>
                <KeyboardArrowRight />
              </Link>
            </div>

            <div className="cta">
              <Link to="/why-hustler" className="bgImg" style={{ backgroundImage: `url(${CTAImg2})` }} />
              <h2>Why Hustler?</h2>
              <p>From our simple design to commercial grade materials, find out why Hustler makes a better product.</p>
              <Link to="/why-hustler" className="textBtn">
                <h3>Learn More</h3>
                <KeyboardArrowRight />
              </Link>
            </div>

            <div className="cta">
              <Link to="/distribution" className="bgImg" style={{ backgroundImage: `url(${CTAImg3})` }} />
              <h2>European Distribution</h2>
              <p>Hustler products are available in several European countries. Learn more about European availability and offerings.</p>
              <Link to="/distribution" className="textBtn">
                <h3>Learn More</h3>
                <KeyboardArrowRight />
              </Link>
            </div>
          </div>
        </div>


      </div>
    )}
  </LanguageContext.Consumer>
);

export default PageLanding;
