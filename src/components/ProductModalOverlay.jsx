/* eslint react/prefer-stateless-function: 0 */
/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from 'react';
import Close from './../img/Close';


export default class ProductModalOverlay extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPress);
  }

  keyPress = (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.clickHandler();
    }
  }

  render() {
    return (
      <div className="productModalOverlay">
        <div className="close" onClick={this.props.clickHandler}><Close /></div>
      </div>
    );
  }
}
