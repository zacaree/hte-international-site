
import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/navigation/footer.css';
import ExcelLogo from './../../img/ExcelLogo';
import ArrowUp from './../../img/ArrowUp';
import Copyright from './Copyright';


const Footer = () => (
  <footer>
    <div className="wrap-footer-top">
      <div className="container-top">

        {/* eslint-disable-next-line */}
        <div className="backToTop" onClick={() => (window.scrollTo(0, 0))}>
          <ArrowUp />
        </div>

        <div className="container-pageListings">
          <ul className="navigation">
            <Link to="/dev/about-us"><li>About Us</li></Link>
            <Link to="/dev/culture-and-values"><li>Culture & Values</li></Link>
            <Link to="/dev/career-opportunities"><li>Career Opportunities</li></Link>
            <Link to="/dev/benefits"><li>Benefits</li></Link>
            <Link to="/dev/contact-us"><li>Contact Us</li></Link>
          </ul>
          <ul className="navigation">
            <li id="exception">Our Brands &#9662;</li>
            <ul className="ul-ourBrands">
              <a href="https://www.hustlerturf.com/"><li>Hustler Turf Equipment</li></a>
              <a href="https://www.bigdogmowerco.com/"><li>BigDog Mower Co.</li></a>
            </ul>
          </ul>
        </div>

        <div className="container-quote">
          <p>Founded in 1960 and based in Hesston, Kansas, Excel Industries is a leading manufacturer of premium commercial and residential turf equipment.</p>
          <p>Excel introduced the world’s first zero-turn mower under the Hustler brand in 1964. Excel Industries and its affiliates have a global distribution network of more than 2,500 U.S. retailers and 25 distributors worldwide.</p>
        </div>
      </div>
    </div>
    <hr />

    <div className="wrap-footer-bottom">
      <div className="container-bottom">
        <ExcelLogo />
        <Copyright />
      </div>
    </div>
  </footer>
);


export default Footer;
