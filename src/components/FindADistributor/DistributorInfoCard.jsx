/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/prop-types: 0 */

// https://developers.google.com/web/fundamentals/native-hardware/click-to-call/

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from './../Tooltip';
import IconPhone from './../../img/IconPhone';
import IconWeb from './../../img/IconWeb';
import IconEmail from './../../img/IconEmail';


export default class DistributorInfoCard extends Component {
  state = {
    emailCopied: false,
  }

  onCopy = () => {
    this.setState({ emailCopied: true });
    setTimeout(() => { this.setState({ emailCopied: false }); }, 3000);
  };

  render() {
    const { name, city, address, country, phone, url, email } = this.props.distributorInfo;
    return (
      <div className="distributorCard">
        <div className="accent" />
        <div className="ctr-top">
          <h3>{name}</h3>
          <p>{address}</p>
          <p>{`${city}, ${country}`}</p>
        </div>
        <hr />


        <div className="ctr-bottom">
          {phone &&
          <a href={`tel:${phone}`} className="alignItems">
            <IconPhone /><p>{phone}</p>
          </a>}

          {url &&
          <a href={url} target="_blank" className="alignItems">
            <IconWeb /><p>{url}</p>
          </a>}

          {email &&
          <CopyToClipboard onCopy={this.onCopy} text={email}>
            <div className="alignItems">
              <IconEmail />
              <p>{email}</p>
              <div className="relative">
                <CSSTransition
                  in={this.state.emailCopied}
                  timeout={250}
                  classNames="tooltipIn"
                  unmountOnExit
                >
                  <Tooltip text="Email address copied" />
                </CSSTransition>
              </div>
            </div>
          </CopyToClipboard>}
        </div>
      </div>
    );
  }
}
