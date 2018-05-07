/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import HustlerLogo from './../../img/HustlerLogo.svg';
import NavMenuDesktop from './NavMenu-Desktop';
import NavMenuMobile from './NavMenu-Mobile';

const Nav = () => (
  <nav>
    <div className="wrap-nav">
      <div className="ctr-logoLockup">
        <Link to="/dev">
          <div className="ctr-logo">
            <img src={HustlerLogo} alt="Hustler Logo" />
          </div>
        </Link>
        <div className="divider" />
        <ul className="ctr-text">
          <li>European</li>
          <li>Distribution</li>
        </ul>
      </div>
      <NavMenuDesktop />
      <NavMenuMobile />
    </div>
  </nav>
);

export default Nav;
