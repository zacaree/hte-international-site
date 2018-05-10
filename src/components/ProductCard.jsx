/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import ArrowRight from './../img/ArrowRight';


const ProductCard = (props) => {
  const { img, name, description, idealIcon, idealText } = props.product;

  return (
    <div className="card">
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
      <div className="textBtn">
        <h3>Available Models</h3>
        <ArrowRight />
      </div>
    </div>
  );
};

export default ProductCard;

