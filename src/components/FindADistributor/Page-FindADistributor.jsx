
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import Btn from './../Btn';
import ArrowSelectBox from './../../img/ArrowSelectBox';

export default class PageFindADistributor extends Component {
  state = {
    lat: -34.397,
    lng: 150.644,
  }


  handleClick = () => {
    this.setState({
      lat: 40.7128,
      lng: -74.005,
    });
  }


  render() {
    return (
      <div className="pageWrap page-findADistributor">
        <div className="wrap">
          <h1>Find a Distributor</h1>
          <div className="accentBar" />

          <div className="row-offset-1rem">
            <div className="ctr-left">
              <p className="bodyCopy">Make a selection to find distributor information for your country.</p>
              <div className="ctr-input">
                <select>
                  <option value="">Select your country</option>
                  <option value="RI">Belgium</option>
                  <option value="SC">Denmark</option>
                  <option value="SD">Estonia</option>
                  <option value="TN">France</option>
                  <option value="TX">Germany</option>
                  <option value="UT">Ireland</option>
                  <option value="VT">Italy</option>
                  <option value="VA">Latvia</option>
                  <option value="WA">Lithuania</option>
                  <option value="WV">Netherlands</option>
                  <option value="WI">Poland</option>
                  <option value="WY">Portugal</option>
                  <option value="WY">Slovakia</option>
                  <option value="WY">Spain</option>
                  <option value="WY">United Kingdom</option>
                </select>
                {/* <label>Select your country</label> */}
                <ArrowSelectBox />
              </div>
            </div>
            <div className="ctr-right">
              <Btn onClick={this.handleClick} />
              <GoogleMap lat={this.state.lat} lng={this.state.lng} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default PageFindADistributor;
