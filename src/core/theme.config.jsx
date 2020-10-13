import { createMuiTheme } from '@material-ui/core/styles';
import { red, pink } from '@material-ui/core/colors';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

// Create a theme instance.
const theme = createMuiTheme({
  zIndex: {
    appBar: 1000,
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },

    secondary: {
      light: red[500],
      main: red[700],
      dark: red[800],
      contrastText: '#fff',
    },
    colors: {
      white: '#fff',
      lightBlue: '#DEF2FC',
      darkBlue: '#2A5279',
      red: '#CA1E25',
      lightBlack: '#0000001f',
      orange: '#DB3B00',
      gray: '#ddd',
    },
    text: {
      primary: '#050505',
      secondary: '#65676b',
      disabled: 'red',
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
