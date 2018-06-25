import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const NavItems = (props) => {
  const { language, text } = props;


  // Products *************************************
  if (text === 'products') {
    switch (language) {
      default:
      case 'English':
        return (
          <Fragment>
            <h5>Products</h5>
            <Link to="/products"><li>View Products</li></Link>
            <Link to="/find-a-distributor"><li>Find a Distributor</li></Link>
          </Fragment>
        );
      case 'Latin':
        return (
          <Fragment>
            <h5>Productos</h5>
            <Link to="/products"><li>gfds fdgdfsgdfs</li></Link>
            <Link to="/find-a-distributor"><li>gfdssdfgdf sgdfs</li></Link>
          </Fragment>
        );
    }
    // About ***************************************
  } else if (text === 'about') {
    switch (language) {
      default:
      case 'English':
        return (
          <Fragment>
            <h5>About Us</h5>
            <Link to="/hustler-story"><li>Hustler’s Story</li></Link>
            <Link to="/why-hustler"><li>Why Hustler’s a Better Mower</li></Link>
            <Link to="/distribution"><li>European Distribution</li></Link>
          </Fragment>
        );
      case 'Latin':
        return (
          <Fragment>
            <h5>Rao Este</h5>
            <Link to="/hustler-story"><li>as dgsadgdfs</li></Link>
            <Link to="/why-hustler"><li>gdfssdfg dfsgg fddfgsgdfs</li></Link>
            <Link to="/distribution"><li>gfdsdfgdsfgdfs gdfs</li></Link>
          </Fragment>
        );
    }
    // Company Info ***************************************
  } else if (text === 'companyInfo') {
    switch (language) {
      default:
      case 'English':
        return (
          <Fragment>
            <p>Hustler manufactures zero-turn mowers for the residential and commercial mower markets. Our strength, innovation and performance set the standard for the industry.</p>
            <p>Hustler Turf – Engineering Performance.</p>
          </Fragment>
        );
      case 'Latin':
        return (
          <Fragment>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, numquam cumque illum aliquam accusantium necessitatibus similique. Incidunt impedit labore soluta recusandae exercitationem.</p>
            <p>Hustler Turf – Magnimo Renarowin.</p>
          </Fragment>
        );
    }
    // Follow Us ***************************************
  } else if (text === 'follow') {
    switch (language) {
      default:
      case 'English':
        return <h5>Follow Us</h5>;
      case 'Latin':
        return <h5>Duelaro Es</h5>;
    }
  } else {
    return '';
  }
};

export default NavItems;
