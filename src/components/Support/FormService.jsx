/* eslint no-param-reassign: 0 */
/* eslint jsx-a11y/label-has-for: 0 */
/* eslint no-return-assign: 0 */
/* eslint prefer-destructuring: 0 */

/* NOTE: Input attributes, onBlur and ref, are used for the label animation on each input */
import React, { Component } from 'react';


export default class FormService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactWho: 'Service',
      firstName: '',
      lastName: '',
      email: '',
      serial: '',
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
    const { contactWho, firstName, lastName, email, serial, message } = this.state;
    alert(`Send form to: ${contactWho}\nFirst name: ${firstName}\nlast name: ${lastName}\nemail: ${email}\n${serial}\nmessage: ${message}`);
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
              type="text"
              name="serial"
              value={this.state.serial}
              onChange={this.handleInputChange}
              required
              minLength="8"
              onBlur={() => this.handleBlur(this.serial)}
              ref={input => this.serial = input}
            />
            <label>Serial* (on mower frame)</label>
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
