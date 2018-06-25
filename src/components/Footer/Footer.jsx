
import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import LanguageContext from './../LanguageContext';
import TextFooterItem from './Text-FooterItem';
import HustlerLogo from './../../img/HustlerLogo_OnBlack.svg';
import Copyright from './Copyright';


const Footer = () => (
  <LanguageContext.Consumer>
    {context => (
      <footer>
        <div className="footer-wrap-top">
          <div className="ctr-top">

            <div className="ctr-pageListings">
              <ul><TextFooterItem language={context.language} text="products" /></ul>
              <ul><TextFooterItem language={context.language} text="about" /></ul>
            </div>

            <div className="ctr-about">
              <h5>Hustler Turf Equipment</h5>
              <TextFooterItem language={context.language} text="companyInfo" />
              <div className="ctr-social">
                <TextFooterItem language={context.language} text="follow" />
                <a href="http://www.youtube.com/HustlerTurfEquip"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.facebook.com/HustlerTurf"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                <a href="https://www.instagram.com/hustlerturf/"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://twitter.com/hustlerturf"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="footer-wrap-bottom">
          <div className="ctr-bottom">
            <Link to="/"><img src={HustlerLogo} alt="Hustler Logo" /></Link>
            <Copyright language={context.language} />
          </div>
        </div>
      </footer>
    )}
  </LanguageContext.Consumer>
);


export default Footer;
