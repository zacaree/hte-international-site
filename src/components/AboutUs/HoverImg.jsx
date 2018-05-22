
import React from 'react';

const HoverImg = props => (
  <div className="hoverImg">
    <div className="bgImg" style={{ backgroundImage: `url(${props.img})` }} />
    <div className="ctr-label">
      <div className="goldenShard" />
      <h3>{props.text}</h3>
    </div>
  </div>
);

export default HoverImg;
