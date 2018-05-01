/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropdownArrow from './../../img/DropdownArrow';


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
            <li>Danish</li>
            <li>Dutch</li>
            <li>English</li>
          </ul>
        </li>

      </ul>
    );
  }
}
