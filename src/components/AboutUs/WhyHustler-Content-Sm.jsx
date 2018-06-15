
import React from 'react';
import HoverImg from './HoverImg';
import SmoothtrakImg from './../../img/smoothtrak.jpg';
import ParkBrakeImg from './../../img/parkBrake.jpg';
import HeavyDutyDeckImg from './../../img/heavyDutyDeck.jpg';

// Media queries display this Sm component on small screens

const WhyHustlerContentLg = () => (
  <div className="ctr-contentSm row-offset-1rem">
    <HoverImg img={SmoothtrakImg} text="SmoothTrak Steering" />
    <h2>Smoothtrak<sup>&trade;</sup> Steering</h2>
    <p className="bodyCopy">It’s what makes driving a Hustler a better experience. Our mowers have the smoothest and most precise steering. You’ll glide around obstacles and make zero-radius turns with ease.</p>
    <HoverImg img={ParkBrakeImg} text="Patented park brake" />
    <h2>Patented park brake</h2>
    <p className="bodyCopy">Simple, convenient, system that automatically disengages/engages the parking brake when you close/open the steering levers. No extra park brake lever to worry about.</p>
    <h2>Tough frame</h2>
    <p className="bodyCopy">Heavy-duty fabricated steel frame provides unmatched durability.</p>
    <h2>Simple design</h2>
    <p className="bodyCopy">Fewer parts means fewer problems and easier service.</p>
    <HoverImg img={HeavyDutyDeckImg} text="Heavy-duty deck" />
    <h2>Heavy-duty deck</h2>
    <p className="bodyCopy">Our decks are engineered to provide a clean, finished cut every time, with even distribution of grass clippings.</p>
    <h2>Low center of gravity</h2>
    <p className="bodyCopy">A reduced profile translates into superior handling and stability.</p>
  </div>
);

export default WhyHustlerContentLg;
