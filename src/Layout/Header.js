import HeaderCartButton from "./HeaderCartButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderStyle = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
  }

  & div {
    width: 100%;
    height: 20rem;
    overflow: hidden;
  }
  & div img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }

  .home {
    border: none;
    padding: 0.5rem 2rem;
    background: white;
    text-decoration: none;
    border-radius: 25px;
    color: black;
    font-weight: bold;
  }
`;
const Header = (props) => {
  return (
    <HeaderStyle>
      <header>
        <h1>Lambda Food</h1>
        <Link className="home" to="/">
          Home
        </Link>
        <Link id="order-pizza" className="home" to="/pizza">
          <HeaderCartButton />
        </Link>
      </header>
      <div>
        <img src="../../Assets/Pizza.jpg" alt="delicous food"></img>
      </div>
    </HeaderStyle>
  );
};

export default Header;
