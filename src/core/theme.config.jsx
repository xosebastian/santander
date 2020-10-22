import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  zIndex: {
    appBar: 1000,
  },
  palette: {
    primary: {
      light: red[500],
      main: red[500],
      dark: red[500],
      contrastText: "#fff",
    },

    secondary: {
      light: "#000",
      main: "#fff",
      dark: "#000",
      contrastText: "#000",
    },
    colors: {
      white: "#fff",
      lightBlue: "#DEF2FC",
      darkBlue: "#2A5279",
      red: "#CA1E25",
      lightBlack: "#0000001f",
      orange: "#DB3B00",
      gray: "#ddd",
    },
    text: {
      primary: "#050505",
      secondary: "#65676b",
      disabled: "red",
    },
    background: {
      default: "#fff",
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
