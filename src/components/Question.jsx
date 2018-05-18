/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import DropdownArrow from './../img/DropdownArrow';

export default class Question extends Component {
  state = {
    showDropdown: false,
  };


  grabHeight = React.createRef();


  toggleDropdown = () => {
    // this.props.clickHandler();
    this.setState({
      showDropdown: !this.state.showDropdown,
      height: this.grabHeight.current.clientHeight,
    });
  }


  render() {
    const { question, answer } = this.props.faq;
    const { showDropdown, height } = this.state;
    const currentHeight = showDropdown ? height : 0;
    const itemZIndex = 90 - this.props.i;
    const accentVisible = this.state.showDropdown ? 1 : 0;

    return (
      <div className="card" style={{ zIndex: itemZIndex }}>
        <div className="accent" style={{ opacity: accentVisible }} />
        <div className="ctr-question">
          <h2>Question</h2>
          <p>{question}</p>
        </div>
        <div className="txtBtn" onClick={this.toggleDropdown} >
          <h3>Answer</h3>
          <DropdownArrow />
        </div>
        <div className="ctr-dropdown">
          <div className="dropdown" style={{ height: `${currentHeight}px` }} >

            <div className="ctr-models" ref={this.grabHeight}>
              <p>{answer}</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// export default Question;
