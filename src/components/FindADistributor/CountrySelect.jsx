/* eslint react/prefer-stateless-function: 0 */
/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownArrow from './../../img/DropdownArrow';


export default class countrySelect extends Component {
  state = {
    dropdownVisible: false,
  }


  componentDidMount() { document.addEventListener('click', this.checkOutsideClick, false); }
  componentWillUnmount() { document.removeEventListener('click', this.checkOutsideClick, false); }

  isOutsideClick = () => { this.setState({ dropdownVisible: false }); }
  checkOutsideClick = e => (this.nodeCountrySelect.contains(e.target) ? null : this.isOutsideClick());

  toggleDropdown = () => { this.setState({ dropdownVisible: !this.state.dropdownVisible }); }


  belgium = () => {
    const belguimInfo = {
      name: 'Vegemac BVBA',
      street: 'Nijvelsebaan 115/1',
      address: '3090 Overijse',
      country: 'Belgium',
      location: {
        lat: 50.764461,
        lng: 4.550743,
      },
      phone: '+ 32 (0) 2 686 10 20',
      url: 'http://www.vegemac.be',
      email: 'admin@vegemac.be',
      zoom: 9,
    };
    this.props.handleClick(belguimInfo);
  }


  render() {
    const { dropdownVisible } = this.state;
    const { country } = this.props;

    return (
      <div className="ctr-countrySelect">
        <div
          className="countrySelect"
          onClick={this.toggleDropdown}
          ref={(node) => { this.nodeCountrySelect = node; }}
        >
          <p>{country}</p>
          <DropdownArrow toggleArrow={dropdownVisible} />
        </div>

        <div className="ctr-dropdown relative">
          <CSSTransition
            in={dropdownVisible}
            timeout={300}
            classNames="fadeInUp"
            unmountOnExit
          >
            <div className="dropdown">
              <ul>
                <li onClick={this.belgium}>Belgium</li>
                <li>Denmark</li>
                <li>Estonia</li>
                <li>France</li>
                <li>Germany</li>
                <li>Ireland</li>
                <li>Italy</li>
                <li>Latvia</li>
                <li>Lithuania</li>
                <li>Netherlands</li>
                <li>Poland</li>
                <li>Portugal</li>
                <li>Slovakia</li>
                <li>Spain</li>
                <li>United Kingdom</li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>


      // <div className="ctr-productModal--fixed">
      //   <div className="ctr-productModal--scroll">

      //     <div className="productModal" ref={(node) => { this.nodeModal = node; }} >


      //       <div className="ctr-productModalTop">
      //         <div className="close" onClick={this.props.toggleModal}><Close /></div>
      //         <div className="productBgImg" style={{ backgroundImage: `url(${bgImg})` }} />

      //         <div className="ctr-productInfo">
      //           <h2>{name}</h2>
      //           <p>{description}</p>
      //           {idealText && (
      //             <div className="idealFor">
      //               {idealIcon}
      //               <span>{idealText}</span>
      //             </div>
      //           )}
      //         </div>

      //         <div className="ctr-productImg">
      //           <img src={img} alt='52&quot; Raptor' />
      //         </div>
      //       </div>


      //       <div className="ctr-productModalBottom">
      //         <h3>Available Models</h3>

      //         <div className="ctr-models">
      //           {models.map(model => (
      //             <ProductModel
      //               key={model.modelNum}
      //               model={model}
      //             />
      //           ))}
      //         </div>

      //         <Link to="/find-a-distributor" ><div className="btn btn-lg btn-gold">Find A Distributor</div></Link>
      //       </div>


      //     </div>
      //   </div>
      // </div>
    );
  }
}
