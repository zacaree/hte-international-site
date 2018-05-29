
import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import HustlerLogo from './../../img/HustlerLogo_OnBlack.svg';
import Copyright from './Copyright';


const Footer = () => (
  <footer>
    <div className="footer-wrap-top">
      <div className="ctr-top">

        <div className="ctr-pageListings">
          <ul>
            <h5>Products</h5>
            <Link to="/products"><li>All Products</li></Link>
          </ul>

          <ul>
            <h5>About Us</h5>
            <Link to="/hustler-story"><li>Hustler’s Story</li></Link>
            <Link to="/why-hustler"><li>Why Hustler’s a Better Mower</li></Link>
            <Link to="/distribution"><li>European Distribution</li></Link>
          </ul>

          <ul>
            <h5>Support</h5>
            <Link to="/contact-us"><li>Contact Us</li></Link>
          </ul>
        </div>

        <div className="ctr-about">
          <h5>Hustler Turf Equipment</h5>
          <p>Hustler manufactures zero-turn mowers for the residential and commercial mower markets. Our strength, innovation and performance set the standard for the industry.</p>
          <p>Hustler – Engineering Performance.</p>
          <div className="ctr-social">
            <h5>Follow Us</h5>
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
        <Copyright />
      </div>
    </div>
  </footer>
);


export default Footer;
