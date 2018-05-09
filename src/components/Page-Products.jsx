/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import ProductCard from './ProductCard';
import IconHome from './../img/IconHome';
import IconWrench from './../img/IconWrench';


export default class PageProducts extends Component {
  products = [
    {
      name: 'Raptor',
      img: '',
      description: 'Legendary Hustler performance and engineering in an entry-level zero-turn mower.',
      idealIcon: <IconHome />,
      idealText: 'Ideal for yards up to one acre',
    },
    {
      name: 'Raptor SD',
      img: '',
      description: 'More features, more muscle, makes small work out of big jobs.',
      idealIcon: <IconHome />,
      idealText: 'Ideal for yards up to three acres',
    },
    {
      name: 'Raptor Flip-Up',
      img: '',
      description: 'Push a button to raise, lower, or adjust deck height.',
      idealIcon: <IconWrench />,
      idealText: 'Cleaning and changing blades was never so easy',
    },
    {
      name: 'FasTrak',
      img: '',
      description: 'Top-of-the-line residential zero-turn with most rugged frame, forks and deck in the industry.',
      idealIcon: <IconHome />,
      idealText: 'Ideal for three to six acre estates',
    },
    {
      name: 'FasTrak SDX',
      img: '',
      description: 'Stronger, faster, tougher, with commercial-grade transmissions, upgraded custom seat and more.',
      idealIcon: '',
      idealText: '',
    },
    {
      name: 'X-ONE',
      img: '',
      description: 'Commercial zero-turn mower built for all-day, every day performance.',
      idealIcon: '',
      idealText: '',
    },
    {
      name: 'Super Z',
      img: '',
      description: 'High-performance zero-turn with unsurpassed strength, reliability, speed, productivity, and a warranty to match.',
      idealIcon: '',
      idealText: '',
    },
    {
      name: 'Hustler Z Diesel',
      img: '',
      description: 'The power and precision of a Hustler, the stamina of a diesel.',
      idealIcon: '',
      idealText: '',
    },
    {
      name: 'TrimStar',
      img: '',
      description: 'Innovative and easy-to-use walk-behind featuring Patented H-Bar<sup>&reg;</sup> steering.',
      idealIcon: '',
      idealText: '',
    },
  ];


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

              {this.products.map(product => (
                <ProductCard
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
