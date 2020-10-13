import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, history } from "./core/store.config";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import theme from "./core/theme.config";
import router from "./core/router.config";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ConnectedRouter history={history}>
        <>
          <Switch>
            {router.map(({ component, path }) => (
              <Route exact component={component} key={path} path={path} />
            ))}
          </Switch>
        </>
      </ConnectedRouter>
      <Footer />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
