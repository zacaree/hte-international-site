import React, { Component } from 'react';


export default class CountryLi extends Component {
  handleClick = () => {
    this.props.onCountrySelect(this.props.country);
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        <img src={this.props.flag} alt={this.props.country} />
        <span>{this.props.country}</span>
      </li>
    );
  }
}
