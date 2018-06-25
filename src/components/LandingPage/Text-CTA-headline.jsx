import React from 'react';

const BtnTxt = (props) => {
  const { language, headline } = props;


  if (headline === 'story') {
    switch (language) {
      default:
      case 'English':
        return (
          <h2>Hustler&#39;s Story</h2>
        );
      case 'Latin':
        return (
          <h2>Lorem ipsum</h2>
        );
    }
  } else if (headline === 'why') {
    switch (language) {
      default:
      case 'English':
        return (
          <h2>Why Hustler?</h2>
        );
      case 'Latin':
        return (
          <h2>Dolor set</h2>
        );
    }
  } else if (headline === 'dist') {
    switch (language) {
      default:
      case 'English':
        return (
          <h2>European Distribution</h2>
        );
      case 'Latin':
        return (
          <h2>iure labore</h2>
        );
    }
  } else {
    return '';
  }
};

export default BtnTxt;
