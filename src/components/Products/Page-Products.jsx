/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import Product from './Product';
import IconHome from './../../img/IconHome';
import IconWrench from './../../img/IconWrench';
import Raptor from './../../img/products/Raptor_10x9ratio.png';
import RaptorSD from './../../img/products/RaptorSD_10x9ratio.png';
import RaptorFlipUp from './../../img/products/RaptorFlipUp_10x9ratio.png';
import Fastrak from './../../img/products/Fastrak_10x9ratio.png';
import FastrakSDX from './../../img/products/FastrakSDX_10x9ratio.png';
import XONE from './../../img/products/XONE_10x9ratio.png';
import SuperZ from './../../img/products/SuperZ_10x9ratio.png';
import HustlerZDiesel from './../../img/products/HustlerZDiesel_10x9ratio.png';
import SuperS from './../../img/products/SuperS_10x9ratio.png';
import Trimstar from './../../img/products/Trimstar_10x9ratio.png';
import RaptorBg from './../../img/products/RaptorBg_700x360ratio.jpg';
import FastrakBg from './../../img/products/FastrakBg_700x360ratio.jpg';
import XONEBg from './../../img/products/XONEBg_700x360ratio.jpg';
import CommercialBg from './../../img/products/CommercialBg_700x360ratio.jpg';


export default class PageProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: 'Raptor',
          img: Raptor,
          bgImg: RaptorBg,
          description: 'Legendary Hustler performance and engineering in an entry-level zero-turn mower.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for yards up to half a hectare (1 acre)',
          models: [
            {
              modelNum: '938316CE',
              deck: '91cm (36in) Side Discharge',
              engine: '11.2kW (15hp) Kawasaki',
            },
            {
              modelNum: '938324CE',
              deck: '107cm (42in) Side Discharge',
              engine: '16kW (21.5hp) Kawasaki',
            },
            {
              modelNum: '938274CE',
              deck: '132cm (52in) Side Discharge',
              engine: '17.2kW (23hp) Kawasaki',
            },
          ],
        },
        {
          name: 'Raptor SD',
          img: RaptorSD,
          bgImg: RaptorBg,
          description: 'More features, more muscle, makes small work out of big jobs.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for yards up to 1 1/2 hectares (3 acres)',
          models: [
            {
              modelNum: '938357CE',
              deck: '91cm (36in) Side Discharge',
              engine: '16kW (21.5hp) Kawasaki',
            },
            {
              modelNum: '938373CE',
              deck: '107cm (42in) Side Discharge',
              engine: '16kW (21.5hp) Kawasaki',
            },
            {
              modelNum: '938340CE',
              deck: '122cm (48in) Side Discharge',
              engine: '17.2kW (23hp) Kawasaki',
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
              deck: '122cm (48in) Side Discharge',
              engine: '17.2kW (23hp) Kawasaki',
            },
            {
              modelNum: '935452CE',
              deck: '122cm (48in) Rear Discharge',
              engine: '17.2kW (23hp) Kawasaki',
            },
          ],
        },
        {
          name: 'FasTrak',
          img: Fastrak,
          bgImg: FastrakBg,
          description: 'Hustler’s top-of-the-line residential zero-turn that offers commercial-grade productivity.',
          idealIcon: <IconHome />,
          idealText: 'Ideal for residential estates',
          models: [
            {
              modelNum: '933424CE',
              deck: '122cm (48in) Side Discharge',
              engine: '17.2kW (23hp) Kawasaki',
            },
            {
              modelNum: '934851CE',
              deck: '122cm (48in) Rear Discharge',
              engine: '17.2kW (23hp) Kawasaki',
            },
            {
              modelNum: '933432CE',
              deck: '137cm (54in) Side Discharge',
              engine: '17.2kW (23hp) Kawasaki',
            },
          ],
        },
        {
          name: 'FasTrak SDX',
          img: FastrakSDX,
          bgImg: FastrakBg,
          description: 'Stronger, faster, tougher, with commercial-grade transmissions, upgraded custom seat and more.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '933945CE',
              deck: '122cm (48in) Side Discharge',
              engine: '16.4kW (22hp) Kawasaki',
            },
            {
              modelNum: '934869CE',
              deck: '122cm (48in) Rear Discharge',
              engine: '16.4kW (22hp) Kawasaki',
            },
            {
              modelNum: '933952CE',
              deck: '137cm (54in) Side Discharge',
              engine: '16.4kW (22hp) Kawasaki',
            },
            {
              modelNum: '933960CE',
              deck: '152cm (60in) Side Discharge',
              engine: '17.5kW (23.5hp) Kawasaki',
            },
          ],
        },
        {
          name: 'X-ONE',
          img: XONE,
          bgImg: XONEBg,
          description: 'Commercial zero-turn mower built for all-day, every day performance.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '936237CE',
              deck: '132cm (52in) Side Discharge',
              engine: '20.1kW (27hp) Kawasaki',
            },
            {
              modelNum: '936401CE',
              deck: '137cm (54in) Rear Discharge',
              engine: '20.1kW (27hp) Kawasaki',
            },
          ],
        },
        {
          name: 'Super Z',
          img: SuperZ,
          bgImg: CommercialBg,
          description: 'High-performance zero-turn with unsurpassed strength, reliability, speed, productivity, and a warranty to match.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '935148CE',
              deck: '152cm (60in) Side Discharge',
              engine: '20.1kW (27hp) Kawasaki',
            },
            {
              modelNum: '935130CE',
              deck: '152cm (60in) Rear Discharge',
              engine: '20.1kW (27hp) Kawasaki',
            },
          ],
        },
        {
          name: 'Hustler Z Diesel',
          img: HustlerZDiesel,
          bgImg: CommercialBg,
          description: 'The power and precision of a Hustler, the stamina of a diesel.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '938175CE',
              deck: '137cm (54in) Side Discharge',
              engine: '18.6kW (25hp) Shibaura',
            },
            {
              modelNum: '938183CE',
              deck: '152cm (60in) Side Discharge',
              engine: '18.6kW (25hp) Shibaura',
            },
            {
              modelNum: '938191CE',
              deck: '152cm (60in) Rear Discharge',
              engine: '18.6kW (25hp) Shibaura',
            },
            {
              modelNum: '938217CE',
              deck: '183cm (72in) Rear Discharge',
              engine: '18.6kW (25hp) Shibaura',
            },
          ],
        },
        {
          name: 'Super S',
          img: SuperS,
          bgImg: CommercialBg,
          description: 'Stand-on with exceptional compact stance for tight spaces and trailering.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '',
              deck: '91cm (36in) Side Discharge',
              engine: '11.2kW (15hp) Kawasaki',
            },
            {
              modelNum: '',
              deck: '122cm (48in) Side Discharge',
              engine: '16.4kW (22hp) Kawasaki',
            },
          ],
        },
        {
          name: 'TrimStar',
          img: Trimstar,
          bgImg: CommercialBg,
          description: 'Innovative and easy-to-use walk-behind featuring patented H-Bar steering.',
          idealIcon: '',
          idealText: '',
          models: [
            {
              modelNum: '930388CE',
              deck: '91cm (36in) Side Discharge',
              engine: '10.8kW (14.5hp) Kawasaki',
            },
            {
              modelNum: '930396CE',
              deck: '122cm (48in) Side Discharge',
              engine: '11.2kW (15hp) Kawasaki',
            },
            {
              modelNum: '930644CE',
              deck: '122cm (48in) Rear Discharge',
              engine: '11.2kW (15hp) Kawasaki',
            },
          ],
        },
      ],
    };
  }


  render() {
    return (
      <div className="pageWrap page-products">

        <div className="wrap">
          <h1>All Products - Europe</h1>
          <div className="accentBar" />

          <div className="row-offset-1rem">
            {this.state.products.map(product => (
              <Product
                key={product.name}
                product={product}
              />
            ))}
          </div>
        </div>

      </div>
    );
  }
}
