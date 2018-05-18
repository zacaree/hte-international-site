import React from 'react';

const Btn = (props) => {
  const { text } = props;

  return (
    <div className="btn btn-lg btn-gold" >
      {text}
    </div>
  );
};

export default Btn;
