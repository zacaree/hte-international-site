import React from 'react';
import { Link } from 'react-router-dom';


const PageLanding = () => (
  <div className="pageWrap">
    <div className="ctr-hero">
      <h1>Maneuver around life’s</h1>
      <h1>most difficult obstacle…time.</h1>
      <h4>With Hustler Turf, we give you the power, strength and speed to mow faster, better, smarter, and use the time you save to do something you love.</h4>
      <Link to="/dev/products"><div className="btn btn-gold btn-lg">See the Lineup</div></Link>
    </div>


  </div>
);

export default PageLanding;
