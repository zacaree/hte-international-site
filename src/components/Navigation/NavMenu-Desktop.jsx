/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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
import usa from './../../img/flags/usa.svg';


export default class NavMenuDesktop extends Component {
  constructor(props) {
    super(props);

    // Don't need any binding here because our methods are arrow functions.
    // https://youtu.be/oZbTqEmQpDo?list=WL&t=227

    this.state = {
      aboutOpen: false,
      supportOpen: false,
      languageOpen: false,
    };
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


  handleClickSupport = () => {
    if (!this.state.supportOpen) {
      document.addEventListener('click', this.handleOutsideClickSupport, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClickSupport, false);
    }
    this.setState({
      supportOpen: !this.state.supportOpen,
    });
  }

  handleOutsideClickSupport = (e) => {
    if (this.nodeSupport.contains(e.target)) {
      return;
    }
    this.handleClickSupport();
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


  //


  render() {
    return (
      <ul className="navMenu-desktop">


        <li>
          <Link to="/products" className="navItem">
            <span>Products</span>
          </Link>
        </li>


        <li className="navItem" onClick={this.handleClickAbout} ref={(node) => { this.nodeAbout = node; }} >
          <span>About Us</span>
          <DropdownArrow toggleArrow={this.state.aboutOpen} />
          <CSSTransition
            in={this.state.aboutOpen}
            timeout={300}
            classNames="menuTransition"
            unmountOnExit
          >
            <ul className="dropdown">
              <li>Hustler’s Story</li>
              <li>Why Hustler’s a Better Mower</li>
              <li>European Distribution</li>
            </ul>
          </CSSTransition>
        </li>


        <li>
          <Link to="/find-a-distributor" className="navItem">
            <span>Find A Distributor</span>
          </Link>
        </li>


        <li className="navItem" onClick={this.handleClickSupport} ref={(node) => { this.nodeSupport = node; }} >
          <span>Support</span>
          <DropdownArrow toggleArrow={this.state.supportOpen} />
          <CSSTransition
            in={this.state.supportOpen}
            timeout={300}
            classNames="menuTransition"
            unmountOnExit
          >
            <ul className="dropdown">
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </CSSTransition>
        </li>


        <li className="navItem" onClick={this.handleClickLanguage} ref={(node) => { this.nodeLanguage = node; }} >
          <span>Language</span>
          <DropdownArrow toggleArrow={this.state.languageOpen} />
          <CSSTransition
            in={this.state.languageOpen}
            timeout={300}
            classNames="menuTransition"
            unmountOnExit
          >
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
              <hr />
              <a href="https://www.hustlerturf.com/"><li><img src={usa} alt="USA" /><span>HustlerTurf.com</span></li></a>
            </ul>
          </CSSTransition>
        </li>


      </ul>
    );
  }
}
