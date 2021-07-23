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
  return (
    <FormStyle>
      <h3>Build Your Own Pizza</h3>
      <form id="pizza-form"></form>
      <label className="label" htmlFor="name">
        Please Enter Your Name:
        <input name="name" type="text" />
      </label>
      <label className="label" htmlFor="size">
        Choice of Size:
        <select name="size">
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
          <input type="checkbox"></input>
        </li>
        <li>
          Ham
          <input type="checkbox"></input>
        </li>
        <li>
          Ground Beef
          <input type="checkbox"></input>
        </li>
        <li>
          Ham
          <input type="checkbox"></input>
        </li>
        <li>
          Meatballs
          <input type="checkbox"></input>
        </li>
        <li>
          Mushrooms
          <input type="checkbox"></input>
        </li>
        <li>
          Spinach
          <input type="checkbox"></input>
        </li>
        <li>
          Jalapenos
          <input type="checkbox"></input>
        </li>
        <li>
          Tomatoes
          <input type="checkbox"></input>
        </li>
        <li>
          Onions
          <input type="checkbox"></input>
        </li>
      </ul>
      <label className="label" htmlFor="name" htmlFor="specical instruction">
        Special Instructions
        <input
          name="name"
          type="text"
          placeholder="Anything else you'd like to add?"
        />
      </label>
      <button id="order-button">Add to Order</button>
    </FormStyle>
  );
};

export default OrderForm;
