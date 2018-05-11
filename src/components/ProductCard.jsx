/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownArrow from './../img/DropdownArrow';
import ProductModel from './ProductModel';


export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }


  toggleDropdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
  }


  render() {
    const { img, name, description, idealIcon, idealText, models } = this.props.product;
    return (
      <div className="ctr-card" onClick={this.toggleDropdown} >
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
          <div className="txtBtn">
            <h3>Available Models</h3>
            <DropdownArrow toggleArrow={this.state.showDropdown} />
          </div>
        </div>
        <div className="ctr-dropdown">

          <CSSTransition
            in={this.state.showDropdown}
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
  }
}

// export default ProductCard;

