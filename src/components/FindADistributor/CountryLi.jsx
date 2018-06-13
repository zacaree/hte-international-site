import React, { Component } from 'react';


export default class CountryLi extends Component {
  handleClick = () => {
    this.props.onCountrySelect(this.props.country);
  }

  render() {
    const country = this.props.country[0].toUpperCase() + this.props.country.slice(1);
    return (
      <li onClick={this.handleClick}>
        <img src={this.props.flag} alt={this.props.country} />
        <span>{country}</span>
      </li>
    );
  }
}
