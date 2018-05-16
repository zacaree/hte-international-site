import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRight from './../img/KeyboardArrowRight';


const PageLanding = () => (
  <div className="pageWrap">
    <div className="ctr-hero">
      <h1>Maneuver around life’s</h1>
      <h1>most difficult obstacle…time.</h1>
      <h4>With Hustler Turf, we give you the power, strength and speed to mow faster, better, smarter, and use the time you save to do something you love.</h4>
      <Link to="/products"><div className="btn btn-gold btn-lg">See the Lineup</div></Link>
    </div>

    <section className="section-cta wrap">
      <div className="row-offset-1rem">
        <div className="cta">
          <Link to="/hustler-story" className="bgImg bgImg-1 aspectRatio" />
          <h2>Hustler&#39;s Story</h2>
          <p>First, we make the best. Then, we make it better. Hustler® Turf introduced the world’s first zero-turn mower in 1964…</p>
          <Link to="/hustler-story" className="textBtn">
            <h3>Learn More</h3>
            <KeyboardArrowRight />
          </Link>
        </div>

        <div className="cta">
          <Link to="/why-hustler" className="bgImg bgImg-2 aspectRatio" />
          <h2>Why Hustler?</h2>
          <p>From our simple design to commercial grade materials, find out why Hustler makes a better product.</p>
          <Link to="/why-hustler" className="textBtn">
            <h3>Learn More</h3>
            <KeyboardArrowRight />
          </Link>
        </div>

        <div className="cta">
          <Link to="/distribution" className="bgImg bgImg-3 aspectRatio" />
          <h2>European Distribution</h2>
          <p>Hustler products are available in several European countries. Learn more about European availability and offerings.</p>
          <Link to="/distribution" className="textBtn">
            <h3>Learn More</h3>
            <KeyboardArrowRight />
          </Link>
        </div>
      </div>
    </section>


  </div>
);

export default PageLanding;
