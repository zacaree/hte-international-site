/* eslint react/prefer-stateless-function: 0 */
/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint no-param-reassign: 0 */

import React, { Component } from 'react';
import DropdownArrow from './../../img/DropdownArrow';
import CountryLi from './CountryLi';
import czechRepublic from './../../img/flags/czechRepublic.svg';
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
// import poland from './../../img/flags/poland.svg';
// import slovakia from './../../img/flags/slovakia.svg';
// import sweden from './../../img/flags/sweden.svg';
import salesForceDataRaw from './../../locations-europe.json';


export default class countrySelect extends Component {
  state = {
    dropdownVisible: false,
  }


  componentDidMount() {
    document.addEventListener('click', this.checkOutsideClick, false);
    this.transformSFData();
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.checkOutsideClick, false);
  }


  onCountrySelect = (selectedCountry) => {
    // eslint-disable-next-line
    const findClickedDistributor = this.transformSFData().filter((distributor) => {
      if (distributor.country === 'Latvia' && selectedCountry === 'Estonia') { // this is beacuse Latvia and Estonia share a distributor.
        return distributor;
      } else if (distributor.country === 'Ireland' && selectedCountry === 'United Kingdom') { // this is beacuse Ireland and UK share a distributor.
        return distributor;
      } else if (distributor.country === selectedCountry) {
        return distributor;
      }
    });

    this.props.handleClick(findClickedDistributor);
  }


  // This all runs on component mount before anything is clicked
  transformSFData = () => {
    // reformat data for better readability
    function simplifyKeys(dist) {
      const simplifiedDist = {
        name: dist.twod_Account_Description__c,
        address: dist.ShippingStreet,
        city: dist.ShippingCity,
        country: dist.ShippingCountry,
        location: {
          lat: dist.HQ_Geolocation__Latitude__s,
          lng: dist.HQ_Geolocation__Longitude__s,
        },
        phone: dist.Phone,
        url: dist.Website,
        email: dist.Email_Address__c,
      };
      return simplifiedDist;
    }

    // Replace country abbreviation with name
    function reformatCountryName(dist) {
      if (dist.ShippingCountry === 'NL') { dist.ShippingCountry = 'Netherlands'; }
      if (dist.ShippingCountry === 'IT') { dist.ShippingCountry = 'Italy'; }
      if (dist.ShippingCountry === 'BE') { dist.ShippingCountry = 'Belgium'; }
      if (dist.ShippingCountry === 'LT') { dist.ShippingCountry = 'Lithuania'; }
      if (dist.ShippingCountry === 'IE') { dist.ShippingCountry = 'Ireland'; }
      if (dist.ShippingCountry === 'LV') { dist.ShippingCountry = 'Latvia'; }
      if (dist.ShippingCountry === 'CZ') { dist.ShippingCountry = 'Czech Republic'; }
      if (dist.ShippingCountry === 'DE') { dist.ShippingCountry = 'Germany'; }
      if (dist.ShippingCountry === 'PT') { dist.ShippingCountry = 'Portugal'; }
      if (dist.ShippingCountry === 'ES') { dist.ShippingCountry = 'Spain'; }
      if (dist.ShippingCountry === 'FR') { dist.ShippingCountry = 'France'; }
      if (dist.ShippingCountry === 'DK') { dist.ShippingCountry = 'Denmark'; }
      if (dist.ShippingCountry === 'GB') { dist.ShippingCountry = 'United Kingdom'; }
      // if (dist.ShippingCountry === 'SK') { dist.ShippingCountry = 'Slovakia'; }
      // if (dist.ShippingCountry === 'PL') { dist.ShippingCountry = 'Poland'; }
      // if (dist.ShippingCountry === 'SE') { dist.ShippingCountry = 'Sweden'; }
    }

    // Map iterates over data and returns transformed data
    function dataTransformations(filteredDistributors) {
      const transformedDistributors = filteredDistributors.map((dist) => {
        reformatCountryName(dist);
        dist = simplifyKeys(dist);
        return dist;
      });
      return transformedDistributors;
    }

    // Using a regex to filter distributors based on their account numbers.
    function filterSalesForceData() {
      const filteredDistributors = salesForceDataRaw[0].filter(dist =>
        dist.Name.match(/209(245|167|221|240|160|170|222|166|239|231|238|241)/),
      );
      return dataTransformations(filteredDistributors);
    }

    return filterSalesForceData();
  }


  isOutsideClick = () => { this.setState({ dropdownVisible: false }); }
  checkOutsideClick = e => (this.nodeCountrySelect.contains(e.target) ? null : this.isOutsideClick());

  toggleDropdown = () => { this.setState({ dropdownVisible: !this.state.dropdownVisible }); }


  render() {
    // console.log(this.transformSFData());
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
              <CountryLi flag={belgium} country="Belgium" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={czechRepublic} country="Czech Republic" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={denmark} country="Denmark" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={estonia} country="Estonia" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={france} country="France" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={germany} country="Germany" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={ireland} country="Ireland" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={italy} country="Italy" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={latvia} country="Latvia" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={lithuania} country="Lithuania" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={netherlands} country="Netherlands" onCountrySelect={this.onCountrySelect} />
              {/* <CountryLi flag={poland} country="poland" onCountrySelect={this.onCountrySelect} /> */}
              <CountryLi flag={portugal} country="Portugal" onCountrySelect={this.onCountrySelect} />
              {/* <CountryLi flag={slovakia} country="slovakia" onCountrySelect={this.onCountrySelect} /> */}
              <CountryLi flag={spain} country="Spain" onCountrySelect={this.onCountrySelect} />
              <CountryLi flag={uk} country="United Kingdom" onCountrySelect={this.onCountrySelect} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
