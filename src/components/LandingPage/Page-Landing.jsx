import React from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from './../LanguageContext';
import CTAImg1 from './../../img/cta_hustlerStory.jpg';
import CTAImg2 from './../../img/cta_whyHustler.jpg';
import CTAImg3 from './../../img/cta_dealerPhoto.jpg';
import KeyboardArrowRight from './../../img/KeyboardArrowRight';
import TextHero from './TextHero';
import HeroImg from './../../img/hero-bg.jpg';
import TextGoldBtn from './Text-GoldBtn';
import TextCTAHead from './Text-CTA-headline';
import TextCTABody from './Text-CTA-body';
import TextLearnMore from './Text-LearnMore';


const PageLanding = () => (
  <LanguageContext.Consumer>
    {context => (
      <div className="pageWrap pageLanding">
        <div className="ctr-hero" style={{ backgroundImage: `url(${HeroImg})` }} >
          <TextHero language={context.language} />
          <Link to="/products">
            <button className="btn btn-gold"><TextGoldBtn language={context.language} /></button>
          </Link>
        </div>

        <div className="section-cta wrap">
          <div className="row-offset-1rem">
            <div className="cta">
              <Link to="/hustler-story" className="bgImg" style={{ backgroundImage: `url(${CTAImg1})` }} />
              <TextCTAHead language={context.language} headline="story" />
              <TextCTABody language={context.language} headline="story" />
              <Link to="/hustler-story" className="textBtn">
                <TextLearnMore language={context.language} />
                <KeyboardArrowRight />
              </Link>
            </div>

            <div className="cta">
              <Link to="/why-hustler" className="bgImg" style={{ backgroundImage: `url(${CTAImg2})` }} />
              <TextCTAHead language={context.language} headline="why" />
              <TextCTABody language={context.language} headline="why" />
              <Link to="/why-hustler" className="textBtn">
                <TextLearnMore language={context.language} />
                <KeyboardArrowRight />
              </Link>
            </div>

            <div className="cta">
              <Link to="/distribution" className="bgImg" style={{ backgroundImage: `url(${CTAImg3})` }} />
              <TextCTAHead language={context.language} headline="dist" />
              <TextCTABody language={context.language} headline="dist" />
              <Link to="/distribution" className="textBtn">
                <TextLearnMore language={context.language} />
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
