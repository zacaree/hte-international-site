/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    const google = window.google;
    this.map = new google.maps.Map(this.mapElement.current, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8,
    });
  }


  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }


  shouldComponentUpdate() {
    return false;
  }


  mapElement = React.createRef();


  render() {
    return (
      <div id="map" ref={this.mapElement} />
    );
  }
}
