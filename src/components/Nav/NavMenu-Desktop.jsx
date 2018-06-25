/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import LanguageContext from './../LanguageContext';
import TextNavItem from './Text-NavItem';
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


export default class NavMenuDesktop extends Component {
  // Don't need any binding here because our methods are arrow functions.
  // https://youtu.be/oZbTqEmQpDo?list=WL&t=227

  state = {
    aboutOpen: false,
    languageOpen: false,
  };


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


  //


  render() {
    return (
      <LanguageContext.Consumer>
        {context => (
          <ul className="navMenu-desktop">


            <li>
              <Link to="/products" className="navItem">
                <TextNavItem language={context.language} text="products" />
              </Link>
            </li>


            <li className="navItem" onClick={this.handleClickAbout} ref={(node) => { this.nodeAbout = node; }} >
              <TextNavItem language={context.language} text="about" />
              <DropdownArrow toggleArrow={this.state.aboutOpen} />
              <CSSTransition
                in={this.state.aboutOpen}
                timeout={300}
                classNames="fadeInUp"
                unmountOnExit
              >
                <ul className="dropdown">
                  <TextNavItem language={context.language} text="story" />
                </ul>
              </CSSTransition>
            </li>


            <li>
              <Link to="/find-a-distributor" className="navItem">
                <TextNavItem language={context.language} text="find" />
              </Link>
            </li>


            <li className="navItem" onClick={this.handleClickLanguage} ref={(node) => { this.nodeLanguage = node; }} >
              <TextNavItem language={context.language} text="lang" />
              <CSSTransition
                in={this.state.languageOpen}
                timeout={300}
                classNames="fadeInUp"
                unmountOnExit
              >
                <ul className="dropdown">
                  <li className="dropdownItem" onClick={context.toLatin} ><img src={denmark} alt="denmark" /><span>Danish</span></li>
                  <li className="dropdownItem"><img src={netherlands} alt="netherlands" /><span>Dutch</span></li>
                  <li className="dropdownItem" onClick={context.toEnglish}><img src={uk} alt="uk" /><span>English</span></li>
                  <li className="dropdownItem"><img src={belgium} alt="belgium" /><span>Flemish</span></li>
                  <li className="dropdownItem" onClick={context.toFrench}><img src={france} alt="france" /><span>French</span></li>
                  <li className="dropdownItem"><img src={germany} alt="germany" /><span>German</span></li>
                  <li className="dropdownItem"><img src={italy} alt="italy" /><span>Italian</span></li>
                  <li className="dropdownItem"><img src={portugal} alt="portugal" /><span>Portugese</span></li>
                  <li className="dropdownItem"><img src={spain} alt="spain" /><span>Spanish</span></li>
                  <li className="dropdownItem"><img src={sweden} alt="sweden" /><span>Swedish</span></li>
                  <hr />
                  <div>
                    <a href="https://www.hustlerturf.com/" className="dropdownItem"><img src={usa} alt="USA" /><span>HustlerTurf.com</span></a>
                  </div>
                </ul>
              </CSSTransition>
            </li>


          </ul>
        )}
      </LanguageContext.Consumer>
    );
  }
}
