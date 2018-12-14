import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import { theme } from './ThemeProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';

const App = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant='contained' >
        Hello
      </Button>
    </React.Fragment>
  );
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
