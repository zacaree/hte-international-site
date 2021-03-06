// Your data should live in the provider

import React, { Component } from 'react';
import LanguageContext from './LanguageContext';

export default class LanguageProvider extends Component {
  state = {
    language: 'English',
  }

  toLatin = () => this.setState({ language: 'Latin' });
  toFrench = () => this.setState({ language: 'French' });
  toEnglish = () => this.setState({ language: 'English' });

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          toLatin: this.toLatin,
          toEnglish: this.toEnglish,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
