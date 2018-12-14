import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from './ThemeProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Router from './Router';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Router />
  </React.Fragment>
)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
