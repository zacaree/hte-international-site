/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import MenuIcon from './../../img/HamburgerMenu';
import DropdownArrow from './../../img/DropdownArrow';
import denmark from './../../img/flags/denmark.svg';
import netherlands from './../../img/flags/netherlands.svg';
import uk from './../../img/flags/uk.svg';
import belgium from './../../img/flags/belgium.svg';
import france from './../../img/flags/france.svg';
import germany from './../../img/flags/germany.svg';
import italy from './../../img/flags/italy.svg';
import portugal from './../../img/flags/portugal.svg';
import spain from './../../img/flags/spain.svg';
import sweden from './../../img/flags/sweden.svg';
import usa from './../../img/flags/usa.svg';


export default class NavMenuMobile extends Component {
  state = {
    navMenuVisible: false,
  };


  handleClickNav = () => {
    if (!this.state.navMenuVisible) {
      document.addEventListener('click', this.handleClickOutsideNav, false);
    } else {
      document.removeEventListener('click', this.handleClickOutsideNav, false);
    }
    this.setState({
      navMenuVisible: !this.state.navMenuVisible,
    });
  }

  handleClickOutsideNav = (e) => {
    if (this.nodeAbout.contains(e.target) || this.nodeLanguage.contains(e.target)) {
      return;
    }
    this.handleClickNav();
  }


  //


  handleClickAbout = () => {
    if (!this.state.aboutOpen) {
      document.addEventListener('click', this.handleOutsideClickAbout, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClickAbout, false);
    }
    this.setState({
      aboutOpen: !this.state.aboutOpen,
    });
  }

  handleOutsideClickAbout = (e) => {
    if (this.nodeAbout.contains(e.target)) {
      return;
    }
    this.handleClickAbout();
  }


  //


  handleClickLanguage = () => {
    if (!this.state.languageOpen) {
      document.addEventListener('click', this.handleOutsideClickLanguage, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClickLanguage, false);
    }
    this.setState({
      languageOpen: !this.state.languageOpen,
    });
  }

  handleOutsideClickLanguage = (e) => {
    if (this.nodeLanguage.contains(e.target)) {
      return;
    }
    this.handleClickLanguage();
  }


  render() {
    return (
      <div className="navMenu-mobile" >

        <div className="menuBtn" onClick={this.handleClickNav}>
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
          classNames="fadeInUp"
          unmountOnExit
        >
          <ul className="mobileList" >


            <Link to="/products" className="navItem">
              <span>Products</span>
            </Link>


            <li className="navItem" onClick={this.handleClickAbout} ref={(node) => { this.nodeAbout = node; }}>
              <span>About Us</span>
              <DropdownArrow toggleArrow={this.state.aboutOpen} />
            </li>
            <CSSTransition
              in={this.state.aboutOpen}
              timeout={300}
              classNames="fadeIn"
              unmountOnExit
            >
              <ul className="dropdown">
                <hr />
                <Link to="/hustler-story"><li>Hustler’s Story</li></Link>
                <Link to="/why-hustler"><li>Why Hustler’s a Better Mower</li></Link>
                <Link to="/distribution"><li>European Distribution</li></Link>
                <hr />
              </ul>
            </CSSTransition>


            <Link to="/find-a-distributor" className="navItem">
              <span>Find a Distributor</span>
            </Link>


            <li className="navItem" onClick={this.handleClickLanguage} ref={(node) => { this.nodeLanguage = node; }}>
              <span>Language</span>
              <img src={uk} alt="uk" />
            </li>
            <CSSTransition
              in={this.state.languageOpen}
              timeout={300}
              classNames="fadeIn"
              unmountOnExit
            >
              <ul className="dropdown">
                <hr />
                <Link to="/"><li><img src={denmark} alt="denmark" /><span>Danish</span></li></Link>
                <Link to="/"><li><img src={netherlands} alt="netherlands" /><span>Dutch</span></li></Link>
                <Link to="/"><li><img src={uk} alt="uk" /><span>English</span></li></Link>
                <Link to="/"><li><img src={belgium} alt="belgium" /><span>Flemish</span></li></Link>
                <Link to="/"><li><img src={france} alt="france" /><span>French</span></li></Link>
                <Link to="/"><li><img src={germany} alt="germany" /><span>German</span></li></Link>
                <Link to="/"><li><img src={italy} alt="italy" /><span>Italian</span></li></Link>
                <Link to="/"><li><img src={portugal} alt="portugal" /><span>Portugese</span></li></Link>
                <Link to="/"><li><img src={spain} alt="spain" /><span>Spanish</span></li></Link>
                <Link to="/"><li><img src={sweden} alt="sweden" /><span>Swedish</span></li></Link>
                <hr />
                <div>
                  <a href="https://www.hustlerturf.com/"><li><img src={usa} alt="USA" /><span>HustlerTurf.com</span></li></a>
                </div>
              </ul>
            </CSSTransition>


          </ul>
        </CSSTransition>

      </div>
    );
  }
}

