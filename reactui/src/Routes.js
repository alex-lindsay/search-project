import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./containers/NotFound/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/reactui/">
        <Home />
      </Route>
      <Route exact path="/reactui/login">
        <Login />
      </Route>{" "}
      <Route>
        <NotFound />
      </Route>{" "}
    </Switch>
  );
}
