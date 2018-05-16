/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import Product from './Product';
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
import RaptorBg from './../img/products/RaptorBg_700x360ratio.jpg';
import FastrakBg from './../img/products/FastrakBg_700x360ratio.jpg';
import XONEBg from './../img/products/XONEBg_700x360ratio.jpg';
import CommercialBg from './../img/products/CommercialBg_700x360ratio.jpg';


export default class PageProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: 'Raptor',
          img: Raptor,
          bgImg: RaptorBg,
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
          bgImg: RaptorBg,
          description: 'More features, more muscle, makes small work out of big jobs.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for yards up to three acres',
          models: [
            {
              modelNum: '938357CE',
              deck: '36” Side Discharge',
              engine: '21.5 Kawasaki FR651',
            },
            {
              modelNum: '938373CE',
              deck: '42” Side Discharge',
              engine: '21.5hp Kawasaki FR651',
            },
            {
              modelNum: '938340CE',
              deck: '48” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'Raptor Flip-Up',
          img: RaptorFlipUp,
          bgImg: RaptorBg,
          description: 'Push a button to raise, lower, or adjust deck height.',
          idealIcon: <IconWrench />,
          idealText: 'Cleaning and changing blades was never so easy',
          models: [
            {
              modelNum: '938415CE',
              deck: '48” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
            {
              modelNum: '935452CE',
              deck: '48” Rear Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'FasTrak',
          img: Fastrak,
          bgImg: FastrakBg,
          description: 'Top-of-the-line residential zero-turn with most rugged frame, forks and deck in the industry.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for three to six acre estates',
          models: [
            {
              modelNum: '933424CE',
              deck: '48” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
            {
              modelNum: '934851CE',
              deck: '48” Rear Discharge',
              engine: '23hp Kawasaki FR691',
            },
            {
              modelNum: '933432CE',
              deck: '54” Side Discharge',
              engine: '23hp Kawasaki FR691',
            },
          ],
        },
        {
          name: 'FasTrak SDX',
          img: FastrakSDX,
          bgImg: FastrakBg,
          description: 'Stronger, faster, tougher, with commercial-grade transmissions, upgraded custom seat and more.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '933945CE',
              deck: '48” Side Discharge',
              engine: '22hp Kawasaki FX691',
            },
            {
              modelNum: '934869CE',
              deck: '48” Rear Discharge',
              engine: '22hp Kawasaki FX691',
            },
            {
              modelNum: '933952CE',
              deck: '54” Side Discharge',
              engine: '22hp Kawasaki FX691',
            },
            {
              modelNum: '933960CE',
              deck: '60” Side Discharge',
              engine: '23.5hp Kawasaki FX730',
            },
          ],
        },
        {
          name: 'X-ONE',
          img: XONE,
          bgImg: XONEBg,
          description: 'Commercial zero-turn mower built for all-day, every day performance.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '936237CE',
              deck: '52” Side Discharge',
              engine: '27hp Kawasaki FX850',
            },
            {
              modelNum: '936401CE',
              deck: '54” Rear Discharge',
              engine: '27hp Kawasaki FX850',
            },
          ],
        },
        {
          name: 'Super Z',
          img: SuperZ,
          bgImg: CommercialBg,
          description: 'High-performance zero-turn with unsurpassed strength, reliability, speed, productivity, and a warranty to match.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '935148CE',
              deck: '60” Side Discharge',
              engine: '27hp Kawasaki FX850',
            },
            {
              modelNum: '935130CE',
              deck: '60” Rear Discharge',
              engine: '27hp Kawasaki FX850',
            },
          ],
        },
        {
          name: 'Hustler Z Diesel',
          img: HustlerZDiesel,
          bgImg: CommercialBg,
          description: 'The power and precision of a Hustler, the stamina of a diesel.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '938175CE',
              deck: '54” Side Discharge',
              engine: '25hp Shibaura',
            },
            {
              modelNum: '938183CE',
              deck: '60” Side Discharge',
              engine: '25hp Shibaura',
            },
            {
              modelNum: '938191CE',
              deck: '60” Rear Discharge',
              engine: '25hp Shibaura',
            },
            {
              modelNum: '938217CE',
              deck: '72” Rear Discharge',
              engine: '25hp Shibaura',
            },
          ],
        },
        {
          name: 'TrimStar',
          img: Trimstar,
          bgImg: CommercialBg,
          description: 'Innovative and easy-to-use walk-behind featuring Patented H-Bar steering.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '930388CE',
              deck: '36” Side Discharge',
              engine: '14.5hp Kawasaki FS481',
            },
            {
              modelNum: '930396CE',
              deck: '48” Side Discharge',
              engine: '15hp Kawasaki FS541',
            },
            {
              modelNum: '930644CE',
              deck: '48” Rear Discharge',
              engine: '15hp Kawasaki FS541',
            },
          ],
        },
      ],
    };
  }


  render() {
    return (
      <div>
        <div className="pageWrap ctr-productsPage">

          <section className="productsHead wrap">
            <h1>All Products - Europe</h1>
            <div className="accentBar" />
          </section>

          <div className="ctr-productsGrid wrap">
            <div className="row-offset-15">

              {this.state.products.map(product => (
                <Product
                  key={product.name}
                  product={product}
                />
              ))}

            </div>
          </div>

        </div>
      </div>
    );
  }
}
