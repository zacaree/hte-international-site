/* eslint react/prop-types: 0 */

import React from 'react';
import ArrowRight from './../img/ArrowRight';
import Raptor from './../img/products/raptor52in_10x9ratio.png';


const ProductCard = props => (
  <div className="card">
    <div className="ctr-productImg">
      <img src={Raptor} alt='52&quot; Raptor' />
    </div>
    <div className="ctr-productInfo">
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      {props.product.idealText && (
        <div className="idealFor">
          {props.product.idealIcon}
          <span>{props.product.idealText}</span>
        </div>
      )}
    </div>
    <div className="textBtn">
      <h3>Available Models</h3>
      <ArrowRight />
    </div>
  </div>
);

export default ProductCard;
