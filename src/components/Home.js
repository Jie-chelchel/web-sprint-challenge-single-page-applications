import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeStyle = styled.div`
  width: 100%;
  text-align: center;

  & img {
    width: 40%;
    height: 30vh;
    margin: 2rem 3rem;
  }

  & div {
    display: flex;
    flex-wrap: wrap;
  }

  & button {
    font: inherit;
    font-size: 2rem;
    border: 1px solid #4f005f;
    background: #4f005f;
    border-radius: 10px;
    color: white;
    padding: 1rem 2rem;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <h1>Delicious Pizza</h1>
      <div>
        <img
          className="home-image"
          src="https://www.marcos.com/uploads/2018/03/7201_Marcos_AllMeat_RetinaMed_2.jpg"
          alt=""
        />
        <img
          className="home-image"
          src="https://www.marcos.com/uploads/2018/03/7201_Marcos_CheezyBread_RetinaMed.jpg"
          alt=""
        />
        <img
          className="home-image"
          src="https://www.marcos.com/uploads/2018/03/7201_Marcos_Cinnasquares_RetinaMed.jpg"
          alt=""
        />
        <img
          className="home-image"
          src="https://cos-marcos.s3.amazonaws.com/production/uploads/2018/03/29050055/Italian-Chef-Salad.png"
          alt=""
        />
      </div>
      <Link to="/pizza">
        <button> Order Now</button>
      </Link>
    </HomeStyle>
  );
}
