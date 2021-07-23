import { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  width: 70%;
  background: white;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5rem;
  & h3 {
    background: #4f005f;
    color: white;
    padding: 1rem 3rem;
  }

  .label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
  }
  & input {
    margin: 0.5rem auto;
  }
  & select {
    margin: 0.5rem auto;
  }
  .toppings {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    border: 1px solid gray;
    border-radius: 10px;
  }
  .toppings li {
    margin-left: 1rem;
    margin-right: 1rem;
    list-style: none;
  }
  .toppings input {
    margin-left: 0.3rem;
  }

  #order-button {
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    border-radius: 5px;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;
  }
  #order-button:hover {
    background: #741188;
    border-color: #741188;
  }
`;

const OrderForm = (props) => {
  const initailForm = {
    name: "",
    size: "",
    pepperoni: false,
    ham: false,
    ground_beef: false,
    Jalapenos: false,
    tomatoes: false,
    special_instruction: "",
  };

  const [form, setForm] = useState(initailForm);
  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    const valueToUse = type === checked ? checked : value;
    setForm({ ...form, [name]: valueToUse });
    console.log(form);
  };

  const submitOrder = (e) => {
    e.preventDefault();
    props.onSubmitOrder(form);
    setForm(initailForm);
  };

  return (
    <FormStyle>
      <h3>Build Your Own Pizza</h3>
      <form id="pizza-form" onSubmit={submitOrder}></form>
      <label className="label" htmlFor="name">
        Please Enter Your Name:
        <input
          name="name"
          type="text"
          onChange={changeHandler}
          value={form.name}
        />
      </label>
      <label className="label" htmlFor="size">
        Choice of Size:
        <select name="size" onChange={changeHandler} value={form.size}>
          <option value="">- Select a size -</option>
          <option value="sm">Small(6 slices)</option>
          <option value="md">Medium(8 slices)</option>
          <option value="lg">Large(10 slices)</option>
          <option value="xl">Extra Large(12 slices)</option>
        </select>
      </label>
      <h4>Choice of Toppings </h4>
      <ul className="toppings">
        <li>
          Pepperoni
          <input
            name="pepperoni"
            type="checkbox"
            onChange={changeHandler}
            checked={form.pepperoni}
          ></input>
        </li>
        <li>
          Ham
          <input
            name="ham"
            type="checkbox"
            onChange={changeHandler}
            checked={form.ham}
          ></input>
        </li>
        <li>
          Ground Beef
          <input
            name="ground_beef"
            type="checkbox"
            onChange={changeHandler}
            checked={form.ground_beef}
          ></input>
        </li>

        <li>
          Jalapenos
          <input
            name="Jalapenos"
            type="checkbox"
            onChange={changeHandler}
            checked={form.Jalapenos}
          ></input>
        </li>
        <li>
          Tomatoes
          <input
            name="tomatoes"
            type="checkbox"
            onChange={changeHandler}
            checked={form.tomatoes}
          ></input>
        </li>
      </ul>
      <label className="label" htmlFor="name" htmlFor="specical instruction">
        Special Instructions
        <input
          name="special_instruction"
          id="special-text"
          type="text"
          onChange={changeHandler}
          placeholder="Anything else you'd like to add?"
          value={form.special_instruction}
        />
      </label>
      <button id="order-button" onClick={submitOrder}>
        Add to Order{" "}
      </button>
    </FormStyle>
  );
};

export default OrderForm;
