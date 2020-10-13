import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import Home from "../views/containers/Home";
import Login from "../views/containers/Login";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import _ from 'lodash';

/*export default [
  {
    component: Home,
    path: "/"
  },
  {
    component: Login,
    path: "/login"
  }
];
*/

export const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => {
      const { onlyAuth} = rest;
      debugger;
      if (_.isEmpty(auth) && onlyAuth) {
        return <Component {...props}></Component>;
      } else {
        <Redirect to="/"></Redirect>;
      }
    }}
  ></Route>
);

const mapStateToProps = (state) => (console.log(state),{
  auth: state.reducer.auth,
});

export default connect(mapStateToProps)(PrivateRoute);

/*



(
  auth ? (
    <Component {...props}></Component>
  ) : (
    <Redirect to="/" ></Redirect>
  )
)*/
