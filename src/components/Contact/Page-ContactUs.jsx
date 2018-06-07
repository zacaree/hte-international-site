/* eslint no-return-assign: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint class-methods-use-this: 0 */

import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class PageContactUs extends Component {
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
          <p className="bodyCopy">We would be happy to hear from you! Please complete the form below and we’ll get back to you as soon as possible.</p>
          <p className="bodyCopy"><i>(You may expect to receive a response between the hours of 8:00 AM and 5:00 PM, Monday through Friday)</i></p>


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
