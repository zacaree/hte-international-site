/* eslint no-return-assign: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint class-methods-use-this: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

export default class PageContactUs extends Component {
  state = {

  };


  // ******************** This block handles the labels movement up and down


  // Helper function - Allows the selection of more than one sibling
  // getNextSiblings(el, filter) {
  //   const sibs = [];
  //   el = el.parentNode.firstChild;
  //   // eslint-disable-next-line
  //   while (el = el.nextSibling) {
  //     if (el.nodeType === 3) continue;
  //     if (!filter || filter(el)) sibs.push(el);
  //   }
  //   return sibs;
  // }

  // Custom filter that is selecting label elements
  // filter(el) {
  //   return el.nodeName.toLowerCase() === 'label';
  // }

  // Checks input for a value. If has value add class to selected label/labels
  // handleBlur = (input) => {
  //   const el = input;
  //   const sibsLabel = this.getNextSiblings(el, this.filter);
  //   if (input && input.value) {
  //     sibsLabel[0].className += ' notEmpty';
  //     sibsLabel[1].className += ' notEmpty';
  //   } else {
  //     sibsLabel[0].classList.remove('notEmpty');
  //     sibsLabel[1].classList.remove('notEmpty');
  //   }
  // };


  // ********************


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }


  render() {
    return (
      <div className="pageWrap page-contactUs">

        <div className="wrap">
          <h1>Contact Us</h1>
          <div className="accentBar" />
          <p className="bodyCopy">We would be happy to hear from you! If you have a question about one of our Hustler products your quickest answer is likely to be found on our <Link to="/faq" className="linkInBodyCopy">Hustler&nbsp;FAQ&nbsp;page</Link> as several commonly asked questions (with answers) are readily available for you. Otherwise please complete the form below and we’ll get back to you as soon as possible. <i>(You may expect to receive a response between the hours of 8:00 AM and 5:00 PM, Monday through Friday)</i></p>

          {/* <div className="ctr ctr-2">
            <div className="ctr-address card">
              <div className="accentBar" />
              <h3>Excel Industries</h3>
              <p>200 South Ridge Road</p>
              <p>Hesston, Kansas 67062</p>
            </div>
          </div> */}


          <ContactForm />


        </div>
      </div>
    );
  }
}
