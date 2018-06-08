/* eslint react/prefer-stateless-function: 0 */
/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import DropdownArrow from './../../img/DropdownArrow';
import denmark from './../../img/flags/denmark.svg';
import netherlands from './../../img/flags/netherlands.svg';
import uk from './../../img/flags/uk.svg';
import belgium from './../../img/flags/belgium.svg';
import france from './../../img/flags/france.svg';
import germany from './../../img/flags/germany.svg';
import portugal from './../../img/flags/portugal.svg';
import spain from './../../img/flags/spain.svg';
import estonia from './../../img/flags/estonia.svg';
import ireland from './../../img/flags/ireland.svg';
import italy from './../../img/flags/italy.svg';
import latvia from './../../img/flags/latvia.svg';
import lithuania from './../../img/flags/lithuania.svg';
import poland from './../../img/flags/poland.svg';
import slovakia from './../../img/flags/slovakia.svg';
// import sweden from './../../img/flags/sweden.svg';
import distributorInfo from './../../locations-europe.json';


export default class countrySelect extends Component {
  state = {
    dropdownVisible: false,
  }


  componentDidMount() { document.addEventListener('click', this.checkOutsideClick, false); }
  componentWillUnmount() { document.removeEventListener('click', this.checkOutsideClick, false); }

  isOutsideClick = () => { this.setState({ dropdownVisible: false }); }
  checkOutsideClick = e => (this.nodeCountrySelect.contains(e.target) ? null : this.isOutsideClick());

  toggleDropdown = () => { this.setState({ dropdownVisible: !this.state.dropdownVisible }); }


  belgium = () => {
    const belguimInfo = {
      name: 'Vegemac BVBA',
      street: 'Nijvelsebaan 115/1',
      address: '3090 Overijse',
      country: 'Belgium',
      location: {
        lat: 50.764461,
        lng: 4.550743,
      },
      phone: '+ 32 (0) 2 686 10 20',
      url: 'https://www.vegemac.be',
      email: 'admin@vegemac.be',
      zoom: 9,
    };
    this.props.handleClick(belguimInfo);
  }

  denmark = () => {
    const denmarkInfo = {
      name: 'ZTR APS/Fenger',
      street: 'Ndr Borremosevej 16',
      address: '9600 Aars',
      country: 'Denmark',
      location: {
        lat: 56.796677,
        lng: 9.571506,
      },
      phone: '011 45 40595250',
      url: 'https://www.ztr.dk/',
      email: 'mail@fengersystem.com',
      zoom: 9,
    };
    this.props.handleClick(denmarkInfo);
  }


  render() {
    console.log(distributorInfo);
    const { dropdownVisible } = this.state;
    const { country } = this.props;
    const animateDropdown = {
      height: dropdownVisible ? `${300}px` : 0,
      padding: dropdownVisible ? `${6}px` : `${0} ${6}px`,
      borderColor: dropdownVisible ? '#DDD' : '#F8F8F8',
    };

    return (
      <div className="ctr-countrySelect">
        <div
          className="countrySelect"
          onClick={this.toggleDropdown}
          ref={(node) => { this.nodeCountrySelect = node; }}
        >
          <p>{country}</p>
          <div className="ctr-arrow">
            <DropdownArrow toggleArrow={dropdownVisible} />
          </div>
        </div>

        <div className="ctr-dropdown relative">
          <div className="dropdown" style={animateDropdown}>
            <ul>
              <li onClick={this.belgium}><img src={belgium} alt="belgium" /><span>Belgium</span></li>
              <li onClick={this.denmark}><img src={denmark} alt="denmark" /><span>Denmark</span></li>
              <li><img src={estonia} alt="estonia" /><span>Estonia</span></li>
              <li><img src={france} alt="france" /><span>France</span></li>
              <li><img src={germany} alt="germany" /><span>Germany</span></li>
              <li><img src={ireland} alt="ireland" /><span>Ireland</span></li>
              <li><img src={italy} alt="italy" /><span>Italy</span></li>
              <li><img src={latvia} alt="latvia" /><span>Latvia</span></li>
              <li><img src={lithuania} alt="lithuania" /><span>Lithuania</span></li>
              <li><img src={netherlands} alt="netherlands" /><span>Netherlands</span></li>
              <li><img src={poland} alt="poland" /><span>Poland</span></li>
              <li><img src={portugal} alt="portugal" /><span>Portugal</span></li>
              <li><img src={slovakia} alt="slovakia" /><span>Slovakia</span></li>
              <li><img src={spain} alt="spain" /><span>Spain</span></li>
              <li><img src={uk} alt="uk" /><span>United Kingdom</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
