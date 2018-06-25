
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import LanguageProvider from './LanguageProvider';
// import PropTypes from 'prop-types';
import Nav from './Nav/Nav';
import PageLanding from './LandingPage/Page-Landing';
import PageProducts from './Products/Page-Products';
import PageHustlerStory from './AboutUs/Page-About-HustlerStory';
import PageWhyHustler from './AboutUs/Page-About-WhyHustler';
import PageEuropeanDistribution from './AboutUs/Page-About-EuropeanDistribution';
import PageFindADistributor from './FindADistributor/Page-FindADistributor';
import NotFound from './Page-NotFound';
import Footer from './Footer/Footer';


export default class App extends Component {
  render() {
    return (
      <LanguageProvider>
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
            <Route path="/find-a-distributor" component={PageFindADistributor} />
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </LanguageProvider>
    );
  }
}


// App.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired,
//     key: PropTypes.string.isRequired,
//   }).isRequired,
// };
