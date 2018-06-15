
/* eslint react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import MapPin from './../../img/mapPin.png';

class MapContainer extends Component {
  render() {
    const { google } = this.props; // Props coming from google-maps-react component
    const { location, zoom } = this.props; // Props coming from Page-FindADistributor.jsx
    return (
      <Map
        className="map"
        google={google}
        zoom={zoom}
        initialCenter={{
          lat: 48.137513,
          lng: 11.574840,
        }}
        center={location}
      >

        {location &&
        <Marker
          position={location}
          icon={{
            url: MapPin,
            anchor: new google.maps.Point(20, 40),
            scaledSize: new google.maps.Size(40, 40),
          }}
        />}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCLw5ONWptSzOU-zpVQcxfiMe94-odCl3E',
})(MapContainer);

