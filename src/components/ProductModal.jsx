/* eslint react/prefer-stateless-function: 0 */
/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from 'react';
import ProductModel from './ProductModel';
import Close from './../img/Close';


export default class ProductModal extends Component {
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
    const { img, bgImg, name, description, idealIcon, idealText, models } = this.props.product;

    console.log(bgImg);

    return (
      <div className="ctr-productModal">
        <div className="productModal">


          <div className="ctr-productModalTop">
            <div className="close" onClick={this.props.clickHandler}><Close /></div>
            <div className="productBgImg" style={{ backgroundImage: `url(${bgImg})` }} />

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

            <div className="ctr-productImg">
              <img src={img} alt='52&quot; Raptor' />
            </div>
          </div>


          <div className="ctr-productModalBottom">
            <h3>Available Models</h3>

            <div className="ctr-models">
              {models.map(model => (
                <ProductModel
                  key={model.modelNum}
                  model={model}
                />
              ))}
            </div>

            <div className="btn btn-lg btn-gold">Find A Distributor</div>
          </div>


        </div>
      </div>
    );
  }
}
