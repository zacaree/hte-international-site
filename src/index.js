// Info on creating page transitions here: https://www.youtube.com/watch?time_continue=17&v=53Y8q-SgLF0

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';

ReactDOM.render((
  <BrowserRouter>
    <Route render={({ location }) => (
      <App location={location} />
    )}
    />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
