
import React from 'react';
import { Link } from 'react-router-dom';
import EuropeanDistributionImg from '../img/euroDistribution.jpg';
import Btn from './Btn';

const PageEuropeanDistribution = () => (
  <div className="pageWrap page-europeanDistribution">
    <div className="wrap">
      <h1>European Distribution</h1>
      <div className="accentBar" />

      <div className="row-offset-1rem">
        <div className="ctr-left">
          <p className="bodyCopy">Hustler is a company dedicated to providing exceptional products to meet and exceed the expectations of our customers.  With the strict standards in place in the European Community, all products shown on this web site meet or exceed Conformity Standards (CE).</p>
          <p className="bodyCopy">Be comfortable in knowing that these products are supported by professional organizations focused on customer care.</p>
          <Link to="/find-a-distributor">
            <Btn text="Find a Distributor" />
          </Link>
        </div>
        <div className="ctr-right">
          <img src={EuropeanDistributionImg} alt="European distribution" />
        </div>
      </div>
    </div>
  </div>
);

export default PageEuropeanDistribution;
