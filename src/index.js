// Helpers
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as Sentry from '@sentry/browser';
// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Used to log/track console errors
Sentry.init({
  dsn:
    'https://50233258c9794d6bbe3b694d19405e29@o378798.ingest.sentry.io/5202758',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('wmn-direct-debit-form-app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
