/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: 0 */

import React, { Component } from 'react';

export default class Answer extends Component {
  renderNoLink() {
    return <p>{this.props.faq.answer}</p>;
  }

  renderOneLink() {
    const { answer, link } = this.props.faq;
    return (
      <React.Fragment>
        <span>{answer[0]}</span>
        <a href={link[0]} className="linkInBodyCopy"> {link[1]} </a>
        <span>{answer[1]}</span>
      </React.Fragment>
    );
  }

  renderTwoLinks() {
    const { answer, link } = this.props.faq;
    return (
      <React.Fragment>
        <span>{answer[0]}</span>
        <a href={link[0]} className="linkInBodyCopy"> {link[1]} </a>
        <span>{answer[1]}</span>
        <a href={link[2]} className="linkInBodyCopy"> {link[3]} </a>
        <span>{answer[2]}</span>
      </React.Fragment>
    );
  }

  renderList() {
    const { answer, list } = this.props.faq;
    return (
      <React.Fragment>
        <p>{answer[0]}</p>
        <ul>
          {list.map((listItem, i) => (
            <li key={listItem[i]}> {listItem} </li>
          ))}
        </ul>
        <p>{answer[1]}</p>
      </React.Fragment>
    );
  }


  render() {
    const { link, list } = this.props.faq;

    if (!link && !list) {
      return this.renderNoLink();
    } else if (link.length === 2) {
      return this.renderOneLink();
    } else if (link.length === 4) {
      return this.renderTwoLinks();
    } else if (list) {
      return this.renderList();
    }
    return <p />;
  }
}

