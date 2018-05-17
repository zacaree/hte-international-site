/* eslint react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint react/no-danger: 0 */

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ArrowRight from './../img/ArrowRight';
import ProductModal from './ProductModal';


export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }


  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  trimstarDescription = () => ({ __html: '<p>Innovative and easy-to-use walk-behind featuring Patented H-Bar<sup>&reg;</sup> steering.</p>' })


  render() {
    const { img, name, description, idealIcon, idealText } = this.props.product;

    return (
      <React.Fragment>
        <div className="ctr-card">
          <div className="card" onClick={this.toggleModal} >
            <div className="ctr-productImg">
              <img src={img} alt='52&quot; Raptor' />
            </div>
            <div className="ctr-productInfo">
              <h2>{name}</h2>
              {name === 'TrimStar' ?
                <div dangerouslySetInnerHTML={this.trimstarDescription()} /> :
                <p>{description}</p>
              }
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


        <CSSTransition
          in={this.state.showModal}
          timeout={300}
          classNames="fadeIn"
          unmountOnExit
        >
          <div className="modalBackground" />
        </CSSTransition>


        <CSSTransition
          in={this.state.showModal}
          timeout={300}
          classNames="fadeInUp"
          unmountOnExit
        >
          <ProductModal
            product={this.props.product}
            toggleModal={this.toggleModal}
          />
        </CSSTransition>

      </React.Fragment>
    );
  }
}

// export default Product;

