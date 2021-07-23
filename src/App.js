import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Header from "./Layout/Header";

const App = () => {
  const [order, setOrder] = useState([]);
  const sumbitOrderHandler = (form) => {
    setOrder([...order, form]);
    console.log(order);
  };

  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza">
          <OrderForm onSubmitOrder={sumbitOrderHandler} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
