import { useState, useEffect } from "react";
import styled from "styled-components";
import { reach } from "yup";
import schema from "./YupValidation";
import { Link } from "react-router-dom";
import ThankYouForYourOrder from "./ThankYouForYourOrder";
import { Route } from "react-router-dom";
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
    color: white;

    border: 1px solid #4f005f;
    background: #4f005f;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  & p {
    margin: 0;
  }
  #order-button:hover {
    background: #741188;
    border-color: #741188;
  }
  & a {
    color: white;
    text-decoration: none;
  }
`;

const OrderForm = (props) => {
  const initialForm = {
    pizzaName: "",
    size: "",
    pepperoni: false,
    ham: false,
    ground_beef: false,
    Jalapenos: false,
    tomatoes: false,
    special_instruction: "",
  };

  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({
    pizzaName: "",
    size: "",
  });
  const [disabled, setDisabled] = useState(true);
  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);

    setForm({ ...form, [name]: valueToUse });
    console.log(form);
  };

  const submitOrder = (e) => {
    e.preventDefault();
    props.onSubmitOrder(form);
    setForm(initialForm);
  };
  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid), [form]);
  });
  return (
    <FormStyle>
      <h3>Build Your Own Pizza</h3>
      <form id="pizza-form" onSubmit={submitOrder}></form>
      <label className="label" htmlFor="pizzaName">
        Please Enter the Pizza Name:
        <input
          name="pizzaName"
          type="text"
          onChange={changeHandler}
          value={form.pizzaName}
        />
      </label>
      {formErrors.pizzaName.length > 0 && (
        <p className="alert">{formErrors.pizzaName}</p>
      )}
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
      {formErrors.size.length > 0 && <p className="alert">{formErrors.size}</p>}
      <h4>Choice of Toppings </h4>
      <ul className="toppings">
        <li>
          Pepperoni
          <input
            name="pepperoni"
            type="checkbox"
            onChange={changeHandler}
            checked={form.pepperoni}
          />
        </li>
        <li>
          Ham
          <input
            name="ham"
            type="checkbox"
            onChange={changeHandler}
            checked={form.ham}
          />
        </li>
        <li>
          Ground Beef
          <input
            name="ground_beef"
            type="checkbox"
            onChange={changeHandler}
            checked={form.ground_beef}
          />
        </li>

        <li>
          Jalapenos
          <input
            name="Jalapenos"
            type="checkbox"
            onChange={changeHandler}
            checked={form.Jalapenos}
          />
        </li>
        <li>
          Tomatoes
          <input
            name="tomatoes"
            type="checkbox"
            onChange={changeHandler}
            checked={form.tomatoes}
          />
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

      <button id="order-button" disabled={disabled} onClick={submitOrder}>
        {disabled && <p>Add to Order</p>}
        {!disabled && <Link to="/order">Add to Order</Link>}
      </button>
    </FormStyle>
  );
};

export default OrderForm;
