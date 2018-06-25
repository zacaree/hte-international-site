import React from 'react';

const GoldBtnTxt = (props) => {
  switch (props.language) {
    default:
    case 'English':
      return (
        <h3>See the Lineup</h3>
      );


    case 'Latin':
      return (
        <h3>Lorem ipsum Dolor</h3>
      );
  }
};

export default GoldBtnTxt;
