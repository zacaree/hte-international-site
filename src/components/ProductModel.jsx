/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';


const ProductModel = (props) => {
  const { modelNum, deck, engine } = props.model;


  return (
    <div className="ctr-model">
      <p className="modelNum">
        <span className="bold">Model: </span>
        <span>{modelNum}</span>
      </p>
      <p>
        <span className="bold">Deck: </span>
        <span>{deck}</span>
      </p>
      <p>
        <span className="bold">Engine: </span>
        <span>{engine}</span>
      </p>
    </div>
  );
};

export default ProductModel;

