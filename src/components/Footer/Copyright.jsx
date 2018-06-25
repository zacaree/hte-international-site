
import React from 'react';

const Copyright = (props) => {
  const { language } = props;
  const year = new Date().getFullYear();

  switch (language) {
    default:
    case 'English':
      return (
        <div className="ctr-copyright">
          <span>© {year} Hustler Turf Equipment. </span>
          <span>All Rights Reserved.</span>
          <span> | </span>
          <a href="">Privacy Policy</a>
        </div>
      );
    case 'Latin':
      return (
        <div className="ctr-copyright">
          <span>© {year} Hustler Turf Equipment. </span>
          <span>Regulos de Todos.</span>
          <span> | </span>
          <a href="">Enero Polico</a>
        </div>
      );
  }
};

export default Copyright;
