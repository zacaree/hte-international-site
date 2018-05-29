/* eslint no-param-reassign: 0 */
/* eslint jsx-a11y/label-has-for: 0 */
/* eslint no-return-assign: 0 */
/* eslint prefer-destructuring: 0 */

/* NOTE: Input attributes, onBlur and ref, are used for the label animation on each input */
import React, { Component } from 'react';


export default class ContactForm extends Component {
  state = {
    firstName: 'First Name*',
    lastName: 'Last Name*',
    email: 'Email*',
    phone: 'Phone',
    address: 'Address',
    apt: 'Apt',
    city: 'City',
    country: 'Country',
    zip: 'Zip',
    message: 'Your message here*',
  };


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    // eslint-disable-next-line
    const { contactWho, firstName, lastName, email, phone, address, apt, city, country, zip, message } = this.state;
    alert(`Send form to: ${contactWho}\nFirst name: ${firstName}\nlast name: ${lastName}\nemail: ${email}\nphone: ${phone}\naddress: ${address}\napt: ${apt}\ncity: ${city}\nstate: ${country}\nzip: ${zip}\nmessage: ${message}`);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row-offset-8">
          <div className="ctr-input">
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              required
              ref={input => this.firstName = input}
            />
          </div>
          <div className="ctr-input">
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required
              ref={input => this.lastName = input}
            />
          </div>

          <div className="ctr-input">
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              ref={input => this.email = input}
            />
          </div>
          <div className="ctr-input">
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              ref={input => this.phone = input}
            />
          </div>

          <div className="flex-2 ctr-input">
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              ref={input => this.address = input}
            />
          </div>
          <div className="ctr-input">
            <input
              type="text"
              name="apt"
              value={this.state.apt}
              onChange={this.handleInputChange}
              ref={input => this.apt = input}
            />
          </div>

          <div className="ctr-input">
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
              ref={input => this.city = input}
            />
          </div>
          <div className="ctr-input">
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
              ref={input => this.country = input}
            />
          </div>
          <div className="ctr-input">
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleInputChange}
              ref={input => this.zip = input}
            />
          </div>

          <div className="ctr-textarea">
            <textarea
              name="message"
              maxLength={2000}
              cols="60"
              rows="10"
              required
              value={this.state.message}
              onChange={this.handleInputChange}
              ref={textarea => this.message = textarea}
            />
            <p className="caption">*Required fields</p>
          </div>

          <div className="ctr-submit">
            <button className="btn btn-lg btn-gold" type="submit" value="Submit" >Submit</button>
          </div>

        </div>
      </form>
    );
  }
}
