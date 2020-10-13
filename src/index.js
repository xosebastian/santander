import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, history } from "./core/store.config";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import theme from "./core/theme.config";
import PrivateRoute from "./core/router.config";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";
import Home from "./views/containers/Home";
import Login from "./views/containers/Login";
import Create from "./views/containers/Create";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route exact component={Home} key={"/"} path={"/"} />
          <Route exact component={Login} key={"/login"} path={"/login"} />
          <Route exact component={Login} key={"/create"} path={"/create"} />
        </Switch>
        <Footer />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
