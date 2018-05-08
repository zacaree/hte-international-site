/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import DropdownArrow from './../img/DropdownArrow';
import Raptor from './../img/products/raptor52in_10x9ratio.png';

export default class PageProducts extends Component {
  render() {
    return (
      <div>
        <div className="pageWrap">

          <section className="productsHead wrap">
            <h1>All Products - Europe</h1>
            <div className="accentBar" />
          </section>

          <div className="ctr-productsGrid wrap">
            <div className="row-offset-15">

              <div className="card">
                <img src={Raptor} alt='52&quot; Raptor' />
                <div className="ctr-productInfo">
                  <h2>Product Name</h2>
                  <p>Legendary Hustler performance and engineering in an entry-level zero-turn mower.</p>

                  <span>Ideal for yards up to one acre.</span>
                </div>
                <div className="textBtn">
                  <h3>Available Models</h3>
                  <DropdownArrow /> {/* toggleArrow={this.state.aboutOpen} */}
                </div>
              </div>

              <div className="card">
                <img src={Raptor} alt='52&quot; Raptor' />
                <div className="ctr-productInfo">
                  <h2>Product Name</h2>
                  <p>Legendary Hustler performance and engineering in an entry-level zero-turn mower.</p>

                  <span>Ideal for yards up to one acre.</span>
                </div>
                <div className="textBtn">
                  <h3>Available Models</h3>
                  <DropdownArrow /> {/* toggleArrow={this.state.aboutOpen} */}
                </div>
              </div>

              <div className="card">
                <img src={Raptor} alt='52&quot; Raptor' />
                <div className="ctr-productInfo">
                  <h2>Product Name</h2>
                  <p>Legendary Hustler performance and engineering in an entry-level zero-turn mower.</p>

                  <span>Ideal for yards up to one acre.</span>
                </div>
                <div className="textBtn">
                  <h3>Available Models</h3>
                  <DropdownArrow /> {/* toggleArrow={this.state.aboutOpen} */}
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    );
  }
}

// export default Products
