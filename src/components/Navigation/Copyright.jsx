
import React from 'react';

const Copyright = () => {
  const year = new Date().getFullYear();

  const divStyle = {
    fontSize: '0.8rem',
  };

  const spanStyle = {
    color: '#A1B2BF',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };

  const aStyle = {
    color: '#A1B2BF',
  };

  return (
    <div style={divStyle}>
      <span style={spanStyle}>© {year} Excel Industries Inc. </span>
      <span style={spanStyle}>All Rights Reserved.</span>
      <span style={spanStyle}> | </span>
      <a style={aStyle} href="">Privacy Policy</a>
    </div>
  );
};

export default Copyright;
