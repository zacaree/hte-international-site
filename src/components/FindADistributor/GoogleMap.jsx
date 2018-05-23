// Stephen Grider - React Integration with 3rd Party Libraries: https://www.udemy.com/react-redux/learn/v4/t/lecture/5691866?start=0

/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    const { google } = window;
    this.map = new google.maps.Map(this.mapElement.current, {
      center: this.props.location,
      zoom: this.props.zoom,
    });
    this.marker = new google.maps.Marker({
      position: this.props.location,
      map: this.map,
    });
  }


  componentWillReceiveProps(nextProps) {
    this.map.panTo(nextProps.location);
    this.map.setZoom(nextProps.zoom);
    this.marker.setPosition(nextProps.location);
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
