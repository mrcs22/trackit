import styled from "styled-components";
import logo from "../images/logo.svg";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
  const { image: profileImage, name } = useContext(UserContext);

  return (
    <Div>
      <img src={logo} alt="Trackit" />
      <img src={profileImage} alt={name} />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #126ba5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

  padding: 0 18px;

  z-index: 100;

  img:first-child {
    height: 49px;
    width: 97px;
  }

  img:last-child {
    height: 51px;
    width: 51px;

    border-radius: 50%;
  }
`;
