import React from 'react';

const Tooltip = props => (
  <React.Fragment>
    <div className="tooltip">
      <span>{props.text}</span>
      <div className="tooltipPoint" />
    </div>
  </React.Fragment>
);

export default Tooltip;
