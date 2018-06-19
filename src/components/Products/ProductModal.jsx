/* eslint react/prefer-stateless-function: 0 */
/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductModel from './ProductModel';
import Close from './../../img/Close';


export default class ProductModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyPress);
    document.addEventListener('click', this.checkOutsideClick, false);
    document.body.classList.add('noScroll'); // Keeps page behind modal from scrolling
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPress);
    document.removeEventListener('click', this.checkOutsideClick, false);
    document.body.classList.remove('noScroll');
  }


  keyPress = e => ((e.key === 'Escape' || e.keyCode === 27) ? this.props.toggleModal() : null);


  isOutsideClick = () => this.props.toggleModal();
  checkOutsideClick = e => (this.nodeModal.contains(e.target) ? null : this.isOutsideClick());


  render() {
    const { img, bgImg, name, description, idealIcon, idealText, models } = this.props.product;

    return (
      <div className="ctr-productModal--fixed">
        <div className="ctr-productModal--scroll">

          <div className="productModal" ref={(node) => { this.nodeModal = node; }} >


            <div className="ctr-productModalTop">
              <div className="close" onClick={this.props.toggleModal}><Close /></div>
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

              <div className="ctr-productImg--modal">
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

              <Link to="/find-a-distributor" ><div className="btn btn-lg btn-gold">Find A Distributor</div></Link>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
