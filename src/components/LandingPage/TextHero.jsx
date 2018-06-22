import React, { Fragment } from 'react';

const TextHero = (props) => {
  switch (props.language) {
    default:
    case 'English':
      return (
        <Fragment>
          <h1>Maneuver around life’s</h1>
          <h1>most difficult obstacle…time.</h1>
          <h4>With Hustler Turf, we give you the power, strength and speed to mow faster, better, smarter, and use the time you save to do something you love.</h4>
        </Fragment>
      );

    case 'Latin':
      return (
        <Fragment>
          <h1>Lorem ipsum dolor</h1>
          <h1>sit amet consectetur adipisicing</h1>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, vitae, sint harum quasi officiis suscipit, distinctio expedita excepturi aperiam corporis vero facilis dolores mollitia nesciunt quia doloremque? Expedita, in molestias.</h4>
        </Fragment>
      );
  }
};

export default TextHero;
