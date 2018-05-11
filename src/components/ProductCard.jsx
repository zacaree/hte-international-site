/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownArrow from './../img/DropdownArrow';
import ProductModel from './ProductModel';


const ProductCard = (props) => {
  const { img, name, description, idealIcon, idealText, models } = props.product;


  return (
    <div className="card" onClick={props.clickHandler} >
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


      <div className="ctr-availableModels">
        <div className="txtBtn">
          <h3>Available Models</h3>
          <DropdownArrow toggleArrow={props.showDropdown} />
        </div>
        <CSSTransition
          in={name && props.showDropdown}
          timeout={300}
          classNames="fadeIn"
          unmountOnExit
        >

          <div className="dropdown">
            {models.map(model => (
              <ProductModel model={model} />
            ))}
          </div>

        </CSSTransition>
      </div>
    </div>
  );
};

export default ProductCard;

