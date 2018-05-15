/* eslint react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from 'react';
import ArrowRight from './../img/ArrowRight';


export default class ProductCard extends Component {
  render() {
    const { img, name, description, idealIcon, idealText } = this.props.product;

    return (
      <div className="ctr-card">
        <div className="card"> {/* need a clicker here */}
          <div className="ctr-productImg">
            <img src={img} alt='52&quot; Raptor' />
          </div>
          <div className="ctr-productInfo">
            <h2>{name}</h2>
            <p>{description}</p>
            {idealText && (
            <div className="idealFor">
              {idealIcon}
              <span>{idealText}</span>
            </div>
          )}
          </div>
          <div className="txtBtn">
            <h3>Available Models</h3>
            <ArrowRight />
          </div>
        </div>
      </div>
    );
  }
}

// export default ProductCard;

