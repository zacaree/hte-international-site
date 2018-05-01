/* eslint no-param-reassign: 0 */
/* eslint jsx-a11y/label-has-for: 0 */
/* eslint no-return-assign: 0 */
/* eslint prefer-destructuring: 0 */

/* NOTE: Input attributes, onBlur and ref, are used for the label animation on each input */
import React, { Component } from 'react';
import ArrowSelectBox from './../../img/ArrowSelectBox';


export default class FormSales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactWho: 'Sales',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      apt: '',
      city: '',
      st: '',
      zip: '',
      message: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    // eslint-disable-next-line
    const { contactWho, firstName, lastName, email, phone, address, apt, city, st, zip, message } = this.state;
    alert(`Send form to: ${contactWho}\nFirst name: ${firstName}\nlast name: ${lastName}\nemail: ${email}\nphone: ${phone}\naddress: ${address}\napt: ${apt}\ncity: ${city}\nstate: ${st}\nzip: ${zip}\nmessage: ${message}`);
    event.preventDefault();
  }


  handleBlur = (input) => {
    if (input && input.value) {
      input.nextSibling.className += ' notEmpty';
    } else {
      input.nextSibling.classList.remove('notEmpty');
    }
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="flex-1 ctr-input">
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              required
              onBlur={() => this.handleBlur(this.firstName)}
              ref={input => this.firstName = input}
            />
            <label>First Name*</label>
          </div>
          <div className="flex-1 ctr-input">
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required
              onBlur={() => this.handleBlur(this.lastName)}
              ref={input => this.lastName = input}
            />
            <label>Last Name*</label>
          </div>
        </div>

        <div className="row">
          <div className="flex-1 ctr-input">
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              onBlur={() => this.handleBlur(this.email)}
              ref={input => this.email = input}
            />
            <label>Email*</label>
          </div>
          <div className="flex-1 ctr-input">
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              onBlur={() => this.handleBlur(this.phone)}
              ref={input => this.phone = input}
            />
            <label>Phone</label>
          </div>
        </div>

        <div className="row">
          <div className="flex-2 ctr-input">
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              onBlur={() => this.handleBlur(this.address)}
              ref={input => this.address = input}
            />
            <label>Address</label>
          </div>
          <div className="flex-1 ctr-input">
            <input
              type="text"
              name="apt"
              value={this.state.apt}
              onChange={this.handleInputChange}
              onBlur={() => this.handleBlur(this.apt)}
              ref={input => this.apt = input}
            />
            <label>Apt #</label>
          </div>
        </div>

        <div className="row">
          <div className="flex-1 ctr-input">
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
              onBlur={() => this.handleBlur(this.city)}
              ref={input => this.city = input}
            />
            <label>City</label>
          </div>
          <div className="flex-1 ctr-input">
            <select
              name="st"
              value={this.state.st}
              onChange={this.handleInputChange}
              onBlur={() => this.handleBlur(this.st)}
              ref={input => this.st = input}
            >
              <option />
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <label>State</label>
            <ArrowSelectBox />
          </div>
          <div className="flex-1 ctr-input">
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleInputChange}
              onBlur={() => this.handleBlur(this.zip)}
              ref={input => this.zip = input}
            />
            <label>Zip Code</label>
          </div>
        </div>

        <div className="row">
          <div className="flex-1 ctr-textarea">
            <textarea
              name="message"
              maxLength={2000}
              cols="60"
              rows="10"
              required
              value={this.state.message}
              onChange={this.handleInputChange}
              onBlur={() => this.handleBlur(this.message)}
              ref={textarea => this.message = textarea}
            />
            <label>Your message here*</label>
          </div>
        </div>
        <p className="caption">*Required fields</p>

        <div className="ctr-submit">
          <button className="btn btnLarge" type="submit" value="Submit" >Submit</button>
        </div>
      </form>
    );
  }
}
