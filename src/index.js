import React from 'react';
import ReactDOM from 'react-dom';

import Pages from './components/Pages';

import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './reduxStore';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Pages />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
