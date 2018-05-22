/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    this.map = new GoogleMap.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8,
    });
  }


  shouldComponentUpdate() {
    return false;
  }


  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}
