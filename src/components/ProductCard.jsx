/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';
import DropdownArrow from './../img/DropdownArrow';
import ProductModel from './ProductModel';


export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.grabHeight = React.createRef();
    this.state = {
      showDropdown: false,
    };
  }

  toggleDropdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
      height: this.grabHeight.current.clientHeight,
    });
  }


  render() {
    const { img, name, description, idealIcon, idealText, models } = this.props.product;
    const { showDropdown, height } = this.state;
    const currentHeight = showDropdown ? height : 0;
    const currentZIndex = showDropdown ? 1001 : 1;

    return (
      <div className="ctr-card" onClick={this.toggleDropdown} style={{ zIndex: currentZIndex }} >
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
            <DropdownArrow toggleArrow={showDropdown} />
          </div>
        </div>
        <div className="ctr-dropdown">
          <div className="dropdown" style={{ height: `${currentHeight}px` }} >

            <div className="ctr-models" ref={this.grabHeight} >
              {models.map(model => (
                <ProductModel
                  key={model.modelNum}
                  model={model}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// export default ProductCard;

