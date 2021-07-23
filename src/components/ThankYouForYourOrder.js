import styled from "styled-components";

const ThankYouForYourOrder = (props) => {
  const OrderSummaryStyle = styled.div`
    width: 60%;
    margin: 3rem auto;
    background: #87dedc;
    padding: 3rem;
    border-radius: 10px;

    & span {
      font-weight: bold;
    }
  `;

  const { order } = props;
  console.log(order);
  return (
    <OrderSummaryStyle>
      <h2> Congrats! Pizza is on it's way!</h2>
      <h3>Here is the pizza your ordered:</h3>
      <p>
        <span>Name:</span> {order.Pizza_name}{" "}
      </p>
      <p>
        <span>Size: </span>
        {order.size}
      </p>
      <p>
        <span>Topping:</span> {order.Jalapenos ? "Jalapenos, " : ""}{" "}
        {order.ham ? "ham, " : ""} {order.ground_beef ? "ground beef, " : ""}
        {order.tomatoes ? "tomatoes, " : ""}
        {order.pepperoni ? "pepperoni " : ""}
      </p>
    </OrderSummaryStyle>
  );
};
export default ThankYouForYourOrder;
