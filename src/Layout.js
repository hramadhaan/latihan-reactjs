import React from "react";
import Login from "./screens/authentication/Login";
import Register from "./screens/authentication/Register";
import { Switch, Route, Redirect } from "react-router-dom";

const Layout = (props) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Layout;
