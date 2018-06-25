import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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

const NavItems = (props) => {
  const { language, text } = props;


  // Products *************************************
  if (text === 'products') {
    switch (language) {
      default:
      case 'English':
        return (
          <span>Products</span>
        );
      case 'Latin':
        return (
          <span>Productos</span>
        );
    }
    // About ***************************************
  } else if (text === 'about') {
    switch (language) {
      default:
      case 'English':
        return (
          <span>About Us</span>
        );
      case 'Latin':
        return (
          <span>Rao Este</span>
        );
    }
    // About - story ***************************************
  } else if (text === 'story') {
    switch (language) {
      default:
      case 'English':
        return (
          <Fragment>
            <Link to="/hustler-story" className="dropdownItem">Hustler’s Story</Link>
            <Link to="/why-hustler" className="dropdownItem">Why Hustler’s a Better Mower</Link>
            <Link to="/distribution" className="dropdownItem">European Distribution</Link>
          </Fragment>
        );
      case 'Latin':
        return (
          <Fragment>
            <Link to="/hustler-story" className="dropdownItem">Lorem ipsum dolor</Link>
            <Link to="/why-hustler" className="dropdownItem">sit amet consectetur</Link>
            <Link to="/distribution" className="dropdownItem">adipisicing elit</Link>
          </Fragment>
        );
    }
    // Find a Distributor ***************************
  } else if (text === 'find') {
    switch (language) {
      default:
      case 'English':
        return (
          <span>Find A Distributor</span>
        );
      case 'Latin':
        return (
          <span>Serci de desturau</span>
        );
    }
    // Language *************************************
  } else if (text === 'lang') {
    switch (language) {
      default:
      case 'English':
        return (
          <Fragment>
            <span>English</span>
            <img src={uk} alt="flag" />
          </Fragment>
        );
      case 'Latin':
        return (
          <Fragment>
            <span>Danish</span>
            <img src={denmark} alt="flag" />
          </Fragment>
        );
    }
  } else {
    return '';
  }
};

export default NavItems;
