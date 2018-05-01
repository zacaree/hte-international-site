/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropdownArrow from './../../img/DropdownArrow';
import denmark from './../../img/flags/denmark.svg';
import netherlands from './../../img/flags/netherlands.svg';
import uk from './../../img/flags/uk.svg';
import belgium from './../../img/flags/belgium.svg';
import france from './../../img/flags/france.svg';
import germany from './../../img/flags/germany.svg';
import portugal from './../../img/flags/portugal.svg';
import spain from './../../img/flags/spain.svg';
import sweden from './../../img/flags/sweden.svg';


export default class NavMenuDesktop extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <ul className="navMenu-desktop navigation">

        <li>
          <Link to="/products" className="navItem">Products</Link>
        </li>


        <li className="navItem">
          <span>About Us</span>
          <DropdownArrow toggleArrow={this.state.menu_aboutVisible} />
          <ul className="dropdown">
            <li>Hustler’s Story</li>
            <li>Why Hustler’s a Better Mower</li>
            <li>European Distribution</li>
          </ul>
        </li>


        <li>
          <Link to="/find-a-distributor" className="navItem">Find A Distributor</Link>
        </li>


        <li className="navItem">
          <span>Support</span>
          <DropdownArrow toggleArrow={this.state.menu_aboutVisible} />
          <ul className="dropdown">
            <li>FAQ</li>
            <li>Manuals</li>
            <li>Contact Us</li>
          </ul>
        </li>


        <li className="navItem">
          <span>Language</span>
          <DropdownArrow toggleArrow={this.state.menu_aboutVisible} />
          <ul className="dropdown">
            <li><img src={denmark} alt="denmark" /><span>Danish</span></li>
            <li><img src={netherlands} alt="netherlands" /><span>Dutch</span></li>
            <li><img src={uk} alt="uk" /><span>English</span></li>
            <li><img src={belgium} alt="belgium" /><span>Flemish</span></li>
            <li><img src={france} alt="france" /><span>French</span></li>
            <li><img src={germany} alt="germany" /><span>German</span></li>
            <li><img src={portugal} alt="portugal" /><span>Portugese</span></li>
            <li><img src={spain} alt="spain" /><span>Spanish</span></li>
            <li><img src={sweden} alt="sweden" /><span>Swedish</span></li>
          </ul>
        </li>

      </ul>
    );
  }
}
