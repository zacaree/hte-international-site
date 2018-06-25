import React, { Fragment } from 'react';
import HoverImg from './HoverImg';
import SmoothtrakImg from './../../img/smoothtrak.jpg';
import ParkBrakeImg from './../../img/parkBrake.jpg';
import HeavyDutyDeckImg from './../../img/heavyDutyDeck.jpg';

const TextWhyHustler = (props) => {
  const { language, text } = props;


  // Products *************************************
  if (text === 'h1') {
    switch (language) {
      default:
      case 'English':
        return (
          <h1>Why Hustler’s a better mower</h1>
        );
      case 'Latin':
        return (
          <h1>Lorem ipsum dolor sit</h1>
        );
    }
    // About ***************************************
  } else if (text === 'content') {
    switch (language) {
      default:
      case 'English':
        return (
          <Fragment>
            <div className="ctr-contentLg row-offset-1rem">
              <div className="ctr-left">
                <h2>Smoothtrak<sup>&trade;</sup> Steering</h2>
                <p className="bodyCopy">It’s what makes driving a Hustler a better experience. Our mowers have the smoothest and most precise steering. You’ll glide around obstacles and make zero-radius turns with ease.</p>
                <h2>Patented park brake</h2>
                <p className="bodyCopy">Simple, convenient, system that automatically disengages/engages the parking brake when you close/open the steering levers. No extra park brake lever to worry about.</p>
                <h2>Tough frame</h2>
                <p className="bodyCopy">Heavy-duty fabricated steel frame provides unmatched durability.</p>
                <h2>Simple design</h2>
                <p className="bodyCopy">Fewer parts means fewer problems and easier service.</p>
                <h2>Heavy-duty deck</h2>
                <p className="bodyCopy">Our decks are engineered to provide a clean, finished cut every time, with even distribution of grass clippings.</p>
                <h2>Low center of gravity</h2>
                <p className="bodyCopy">A reduced profile translates into superior handling and stability.</p>
              </div>
              <div className="ctr-right">
                <HoverImg img={SmoothtrakImg} text="SmoothTrak Steering" />
                <HoverImg img={ParkBrakeImg} text="Patented park brake" />
                <HoverImg img={HeavyDutyDeckImg} text="Heavy-duty deck" />
              </div>
            </div>


            {/* The section below is the alternate layout for mobile */}
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
          </Fragment>
        );
      case 'Latin':
        return (
          <Fragment>
            <div className="ctr-contentLg row-offset-1rem">
              <div className="ctr-left">
                <h2>Lorem, ipsum dolor sit</h2>
                <p className="bodyCopy">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora ut sunt iste iusto quas provident dignissimos similique dolore harum soluta commodi perspiciatis voluptates inventore, eveniet cum quasi ab ipsum?</p>
                <h2> amet consectetur adipisicing</h2>
                <p className="bodyCopy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex quas ab minima et corrupti quisquam ducimus quasi rem quam? Dicta natus quos quae incidunt eius dolore harum eveniet. Vitae!</p>
                <h2>elit. Rem deleniti</h2>
                <p className="bodyCopy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat alias ducimus molestiae. Laborum eaque tenetur, quidem consequatur incidunt reprehenderit cumque nostrum cupiditate, blanditiis aspernatur aperiam iure distinctio voluptatum aliquam.</p>
                <h2>Lorem, ipsum dolor sit</h2>
                <p className="bodyCopy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat alias ducimus molestiae. Laborum eaque tenetur, quidem consequatur incidunt reprehenderit cumque nostrum cupiditate, blanditiis aspernatur aperiam iure distinctio voluptatum aliquam.</p>
                <h2> amet consectetur adipisicing</h2>
                <p className="bodyCopy">Our decks are engineered to provide a clean, finished cut every time, with even distribution of grass clippings.</p>
                <h2>elit. Rem deleniti</h2>
                <p className="bodyCopy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat alias ducimus molestiae. Laborum eaque tenetur, quidem consequatur incidunt reprehenderit cumque nostrum cupiditate, blanditiis aspernatur aperiam iure distinctio voluptatum aliquam.</p>
              </div>
              <div className="ctr-right">
                <HoverImg img={SmoothtrakImg} text="Lorem ipsum" />
                <HoverImg img={ParkBrakeImg} text="Lorem ipsum" />
                <HoverImg img={HeavyDutyDeckImg} text="Lorem ipsum" />
              </div>
            </div>


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
          </Fragment>
        );
    }
  } else {
    return '';
  }
};

export default TextWhyHustler;
