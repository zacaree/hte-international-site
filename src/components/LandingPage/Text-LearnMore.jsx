import React from 'react';

const LearnMore = (props) => {
  switch (props.language) {
    default:
    case 'English':
      return (
        <h3>Learn More</h3>
      );


    case 'Latin':
      return (
        <h3>Lorem ipsum</h3>
      );
  }
};

export default LearnMore;
