import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Header from "./Layout/Header";
import axios from "axios";

const App = () => {
  const [order, setOrder] = useState([]);

  const sumbitOrderHandler = (form) => {
    const newOrder = {
      Pizza_name: form.pizzaName.trim(),
      size: form.size,
      pepperoni: form.pepperoni,
      ham: form.ham,
      ground_beef: form.ground_beef,
      Jalapenos: form.Jalapenos,
      tomatoes: form.tomatoes,
      special_instruction: form.special_instruction.trim(),
    };
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log(res.data);
        setOrder([...order, res.data]);
      })
      .catch((err) => console.log(err));
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
