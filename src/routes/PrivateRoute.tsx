import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";
import { AuthState } from "../types";

const PrivateRoute = ({ component: Component, ...rest }:any) => {
  const loggedIn = useSelector((state:{authReducer:AuthState}) => state.authReducer.isAuth);
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
