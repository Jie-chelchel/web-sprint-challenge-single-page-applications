import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Header from "./Layout/Header";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza">
          <OrderForm />
        </Route>
      </Switch>
    </>
  );
};
export default App;
