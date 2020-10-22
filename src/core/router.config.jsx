import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import _ from "lodash";

export const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => {
      const { onlyAuth, onlyAdmin } = rest;
      if (_.isEmpty(auth) && onlyAuth) {
        return <Component {...props}></Component>;
      } else {
        if (!_.isEmpty(auth)) {
          if (onlyAdmin && auth.role == "admin") {
            return <Component {...props}></Component>;
          } else {
            return <Redirect to="/"></Redirect>;
          }
        } else {
          return <Redirect to="/"></Redirect>;
        }
      }
    }}
  ></Route>
);

const mapStateToProps = (state) => (
  console.log(state),
  {
    auth: state.reducer.auth,
  }
);

export default connect(mapStateToProps)(PrivateRoute);
