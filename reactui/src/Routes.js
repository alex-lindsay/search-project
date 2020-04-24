import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Products from "./containers/Products/Products";
import Cart from "./containers/Cart/Cart";
import NotFound from "./containers/NotFound/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/reactui/">
        <Home />
      </Route>
      <Route exact path="/reactui/login">
        <Login />
      </Route>
      <Route exact path="/reactui/products">
        <Products />
      </Route>
      <Route exact path="/reactui/cart">
        <Cart />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
