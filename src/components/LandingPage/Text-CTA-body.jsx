import React from 'react';

const BtnTxt = (props) => {
  const { language, headline } = props;


  if (headline === 'story') {
    switch (language) {
      default:
      case 'English':
        return (
          <p>We make the best. Then, we make it better. In 1964, we introduced the Hustler, the world’s first zero-turn mower…</p>
        );
      case 'Latin':
        return (
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel, rem aliquid similique autem molestias iusto veritatis aspernatur.</p>
        );
    }
  } else if (headline === 'why') {
    switch (language) {
      default:
      case 'English':
        return (
          <p>From our simple design to commercial grade materials, find out why Hustler makes a better product.</p>
        );
      case 'Latin':
        return (
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quo sed molestias laboriosam consequatur velit commodi.</p>
        );
    }
  } else if (headline === 'dist') {
    switch (language) {
      default:
      case 'English':
        return (
          <p>Hustler products are available in several European countries. Learn more about European availability and offerings.</p>
        );
      case 'Latin':
        return (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste asperiores dolor sit amet dolore? Error, quasi, voluptate veniam rem asperiores dolore mollitia.</p>
        );
    }
  } else {
    return null;
  }
};

export default BtnTxt;
