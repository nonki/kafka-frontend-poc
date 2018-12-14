import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export const shade = 500;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[shade],
    },
    secondary: {
      main: red[shade],
    },
    type: 'light',
  },
  typography: {
    useNextVariants: true,
  },
});


