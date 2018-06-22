// Your data should live in the provider

import React, { Component } from 'react';
import LanguageContext from './LanguageContext';

export default class LanguageProvider extends Component {
  state = {
    language: 'English',
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          toLatin: () => this.setState({
            language: 'Latin',
          }),
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
