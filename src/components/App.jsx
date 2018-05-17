
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';

import Nav from './Navigation/Nav';
import PageLanding from './Page-Landing';
import PageProducts from './Page-Products';
import PageHustlerStory from './Page-About-HustlerStory';
import PageWhyHustler from './Page-About-WhyHustler';
import PageEuropeanDistribution from './Page-About-EuropeanDistribution';
// import PageFindADistributor from './Page-FindADistributor';
import PageFAQ from './Page-FAQ';
import PageContactUs from './Page-Contact/Page-ContactUs';
import NotFound from './Page-NotFound';
import Footer from './Navigation/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Headroom style={{ zIndex: '99' }}>
          <Nav />
        </Headroom>

        <Switch location={this.props.location}>
          <Route exact path="/" component={PageLanding} />
          <Route path="/products" component={PageProducts} />
          <Route path="/hustler-story" component={PageHustlerStory} />
          <Route path="/why-hustler" component={PageWhyHustler} />
          <Route path="/distribution" component={PageEuropeanDistribution} />
          {/* <Route path="/find-a-distributor" component={PageFindADistributor} /> */}
          <Route path="/faq" component={PageFAQ} />
          <Route path="/contact-us" component={PageContactUs} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    );
  }
}


App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};
