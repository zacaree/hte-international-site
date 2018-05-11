/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ProductCard from './ProductCard';
import ProductModalOverlay from './ProductModalOverlay';
import IconHome from './../img/IconHome';
import IconWrench from './../img/IconWrench';
import Raptor from './../img/products/Raptor_10x9ratio.png';
import RaptorSD from './../img/products/RaptorSD_10x9ratio.png';
import RaptorFlipUp from './../img/products/RaptorFlipUp_10x9ratio.png';
import Fastrak from './../img/products/Fastrak_10x9ratio.png';
import FastrakSDX from './../img/products/FastrakSDX_10x9ratio.png';
import XONE from './../img/products/XONE_10x9ratio.png';
import SuperZ from './../img/products/SuperZ_10x9ratio.png';
import HustlerZDiesel from './../img/products/HustlerZDiesel_10x9ratio.png';
import Trimstar from './../img/products/Trimstar_10x9ratio.png';


export default class PageProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {

      products: [
        {
          name: 'Raptor',
          img: Raptor,
          description: 'Legendary Hustler performance and engineering in an entry-level zero-turn mower.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for yards up to one acre',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'Raptor SD',
          img: RaptorSD,
          description: 'More features, more muscle, makes small work out of big jobs.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for yards up to three acres',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'Raptor Flip-Up',
          img: RaptorFlipUp,
          description: 'Push a button to raise, lower, or adjust deck height.',
          idealIcon: <IconWrench />,
          idealText: 'Cleaning and changing blades was never so easy',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'FasTrak',
          img: Fastrak,
          description: 'Top-of-the-line residential zero-turn with most rugged frame, forks and deck in the industry.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for three to six acre estates',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'FasTrak SDX',
          img: FastrakSDX,
          description: 'Stronger, faster, tougher, with commercial-grade transmissions, upgraded custom seat and more.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'X-ONE',
          img: XONE,
          description: 'Commercial zero-turn mower built for all-day, every day performance.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'Super Z',
          img: SuperZ,
          description: 'High-performance zero-turn with unsurpassed strength, reliability, speed, productivity, and a warranty to match.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'Hustler Z Diesel',
          img: HustlerZDiesel,
          description: 'The power and precision of a Hustler, the stamina of a diesel.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'TrimStar',
          img: Trimstar,
          description: 'Innovative and easy-to-use walk-behind featuring Patented H-Bar<sup>&reg;</sup> steering.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '938316CE',
              deck: '36” Side Discharge',
              engine: '15hp Kawasaki FR541',
            },
            {
              modelNum: '938324CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938274CE',
              deck: '52” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
      ],

      showProductModal: false,

    };
  }


  toggleProductModal = () => {
    this.setState({
      showProductModal: !this.state.showProductModal,
    });
  }


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

              {this.state.products.map(product => (
                <ProductCard
                  key={product.name}
                  product={product}
                  showDropdown={this.state.showDropdown}
                  // clickHandler={this.toggleDropdown}
                />
              ))}

            </div>
          </div>

          <CSSTransition
            in={this.state.showProductModal}
            timeout={300}
            classNames="fadeIn"
            unmountOnExit
          >
            <ProductModalOverlay clickHandler={this.toggleProductModal} />
          </CSSTransition>

        </div>
      </div>
    );
  }
}
