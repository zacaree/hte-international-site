/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import HustlerLogo from './../../img/HustlerLogo.svg';
import NavMenuDesktop from './NavMenu-Desktop';
import NavMenuMobile from './NavMenu-Mobile';
// import './../../styles/navigation/nav.css';

const Nav = () => (
  <nav>
    <div className="wrap-nav">
      <Link to="/dev">
        <div className="ctr-logo">
          <img src={HustlerLogo} alt="Hustler Logo" />
        </div>
      </Link>
      <NavMenuDesktop />
      <NavMenuMobile />
    </div>
  </nav>
);

export default Nav;
