import React from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.authReducer.isAuth);
  return (
    <Route
      {...rest}
      render={(props) => loggedIn ?
      <Component />
      :
      <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>}
    />
  );
};
export default PrivateRoute;
