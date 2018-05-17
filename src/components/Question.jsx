import React from 'react';
import DropdownArrow from './../img/DropdownArrow';

const Question = props => (
  <div className="card" >
    <div className="ctr-question">
      <h2>Question</h2>
      <p>{props.faq.question}</p>
    </div>
    <div className="txtBtn">
      <h3>Answer</h3>
      <DropdownArrow />
    </div>
  </div>
);

export default Question;
