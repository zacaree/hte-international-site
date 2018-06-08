
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint object-curly-newline: 0 */

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CountrySelect from './CountrySelect';
import GoogleMapContainer from './GoogleMapContainer';
import DistributorInfoCard from './DistributorInfoCard';


export default class PageFindADistributor extends Component {
  state = {
    country: 'Select your country',
    location: null,
    zoom: 4,
  }


  handleClick = (distributorInfo) => { this.setState(distributorInfo); }


  render() {
    const { name, street, address, country, phone, url, email, location, zoom } = this.state;
    return (
      <div className="pageWrap page-findADistributor">
        <div className="wrap">
          <h1>Find a Distributor</h1>
          <div className="accentBar" />

          <div className="row-offset-1rem">
            <div className="ctr-left">
              <p className="bodyCopy">Make a selection to find distributor information for your country.</p>

              <CountrySelect country={country} handleClick={this.handleClick} />

              {name && (
                <DistributorInfoCard
                  distributorInfo={{ name, street, address, country, phone, url, email }}
                />
              )}

            </div>

            <div className="ctr-right">
              <GoogleMapContainer
                location={location}
                zoom={zoom}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// export default PageFindADistributor;
