import CartIcon from "./CartIcon";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  & .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }
  & .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }
`;

const HeaderCartButton = (props) => {
  return (
    <ButtonStyle>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Start Order</span>
    </ButtonStyle>
  );
};

export default HeaderCartButton;
