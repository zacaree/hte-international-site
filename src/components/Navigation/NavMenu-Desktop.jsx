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

    this.state = {
      aboutVisible: false,
      supportVisible: false,
      languageVisible: false,
      backgroundVisible: false,
      bgWidth: '',
      bgHeight: '',
      currentTarget: '',
    };
  }


  //


  componentDidMount() {
    this.myfunct();
  }

  async myfunct() {
    console.log(this.state.currentTarget);
  }


  //


  handleEnterAbout = (e) => {
    // console.log(e.target.children[2].getBoundingClientRect());

    const dropdownCoords = e.target.getBoundingClientRect();
    // console.log(dropdownCoords);

    const { target } = e;

    // console.log(target);


    this.setState({
      aboutVisible: true,
      backgroundVisible: true,
      bgWidth: dropdownCoords.width,
      bgHeight: dropdownCoords.height,
      currentTarget: target,
    });
  }

  handleLeaveAbout = () => {
    this.setState({
      aboutVisible: false,
      backgroundVisible: false,
    });
  }


  //


  handleEnterSupport = (e) => {
    const dropdownCoords = e.target.getBoundingClientRect();
    console.log(dropdownCoords);

    this.setState({
      supportVisible: true,
      backgroundVisible: true,
    });
  }

  handleLeaveSupport = () => {
    this.setState({
      supportVisible: false,
      backgroundVisible: false,
    });
  }


  //


  handleEnterLanguage = () => {
    this.setState({
      languageVisible: true,
      backgroundVisible: true,
    });
  }

  handleLeaveLanguage = () => {
    this.setState({
      languageVisible: false,
      backgroundVisible: false,
    });
  }


  //


  render() {
    return (
      <div className="navMenu-desktop">


        <CSSTransition
          in={this.state.backgroundVisible}
          timeout={300}
          classNames="menuTransition"
          unmountOnExit
        >
          <div
            className="dropdownBackground"
            style={{
              transition: '0.3s ease-in-out',
              width: this.state.bgWidth,
              height: this.state.bgHeight,
            }}
          >
            <span className="arrow" />
          </div>
        </CSSTransition>


        <ul className="navItems">
          <li>
            <Link to="/products" className="navItem">Products</Link>
          </li>


          <li
            className="navItem"
            onMouseEnter={this.handleEnterAbout}
            onMouseLeave={this.handleLeaveAbout}
          >
            <span>About Us</span>
            <DropdownArrow toggleArrow={this.state.menu_aboutVisible} />
            <CSSTransition
              in={this.state.aboutVisible}
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
            <Link to="/find-a-distributor" className="navItem">Find A Distributor</Link>
          </li>


          <li
            className="navItem"
            onMouseEnter={this.handleEnterSupport}
            onMouseLeave={this.handleLeaveSupport}
          >
            <span>Support</span>
            <DropdownArrow toggleArrow={this.state.menu_aboutVisible} />
            <CSSTransition
              in={this.state.supportVisible}
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


          <li
            className="navItem"
            onMouseEnter={this.handleEnterLanguage}
            onMouseLeave={this.handleLeaveLanguage}
          >
            <span>Language</span>
            <DropdownArrow toggleArrow={this.state.menu_aboutVisible} />
            <CSSTransition
              in={this.state.languageVisible}
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
      </div>
    );
  }
}
