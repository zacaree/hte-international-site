/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import MenuIcon from './../../img/HamburgerMenu';
import DropdownArrow from './../../img/DropdownArrow';
import './../../styles/navigation/navMenu-mobile.css';


export default class NavMenuMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navMenuVisible: false,
      brandDropdownVisible: false,
    };

    this.handleClickNav = this.handleClickNav.bind(this);
    this.handleClickBrands = this.handleClickBrands.bind(this);
    this.handleClickOutsideNav = this.handleClickOutsideNav.bind(this);
    this.handleClickOutsideBrands = this.handleClickOutsideBrands.bind(this);
  }


  handleClickNav() {
    if (!this.state.navMenuVisible) {
      document.addEventListener('click', this.handleClickOutsideNav, false);
    } else {
      document.removeEventListener('click', this.handleClickOutsideNav, false);
    }
    this.setState(() => ({
      navMenuVisible: !this.state.navMenuVisible,
    }));
  }

  handleClickOutsideNav(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickNav();
  }


  handleClickBrands = () => {
    if (!this.state.brandDropdownVisible) {
      document.addEventListener('click', this.handleClickOutsideBrands, false);
    } else {
      document.removeEventListener('click', this.handleClickOutsideBrands, false);
    }
    this.setState(() => ({
      brandDropdownVisible: !this.state.brandDropdownVisible,
    }));
  };

  handleClickOutsideBrands(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickBrands();
  }


  render() {
    return (
      <div className="ctr-navMenu-mobile">

        <div className="menuBtn" onClick={this.handleClickNav} >
          <MenuIcon
            isOpen={this.state.navMenuVisible}
            width={20}
            height={12}
            strokeWidth={2}
            color="#5E6971"
            animationDuration={0.3}
          />
        </div>

        <CSSTransition
          in={this.state.navMenuVisible}
          timeout={300}
          classNames="navMenuTransition"
          unmountOnExit
        >
          <ul className="navMenu-mobile navigation" >
            <Link to="/dev/about-us"><li>About Us</li></Link>
            <Link to="/dev/culture-and-values"><li>Culture & Values</li></Link>
            <Link to="/dev/career-opportunities"><li>Career Opportunities</li></Link>
            <Link to="/dev/benefits"><li>Benefits</li></Link>
            <div className="ctr-ourBrands-mobile" ref={(node) => { this.node = node; }}>
              <li onClick={this.handleClickBrands}>Our Brands <DropdownArrow toggleArrow={this.state.brandDropdownVisible} /></li>

              {/* <CSSTransition
                in={this.state.brandDropdownVisible}
                timeout={300}
                classNames="brandTransition"
                unmountOnExit
              >
                <BrandsDropdownMobile />
              </CSSTransition> */}

            </div>
          </ul>
        </CSSTransition>

      </div>
    );
  }
}

