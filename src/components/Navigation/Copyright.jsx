
import React from 'react';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="ctr-copyright">
      <span>© {year} Hustler Turf Equipment. </span>
      <span>All Rights Reserved.</span>
      <span> | </span>
      <a href="">Privacy Policy</a>
    </div>
  );
};

export default Copyright;
