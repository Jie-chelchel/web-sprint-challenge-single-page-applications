const ThankYouForYourOrder = (props) => {
  const { order } = props;
  return (
    <div>
      <h2> Congrats! Your order is received!</h2>
      <h3>Here is the pizza your ordered:</h3>
      <p>{order.size}</p>
    </div>
  );
};
export default ThankYouForYourOrder;
