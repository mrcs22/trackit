import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
  const history = useHistory();
  return (
    <Div>
      <StyledLink to="/habitos">Hábitos</StyledLink>
      <Button onClick={goToToday}>Hoje</Button>

      <StyledLink to="/historico">Histórico</StyledLink>
    </Div>
  );

  function goToToday() {
    history.push("/hoje");
  }
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  width: 100%;

  background-color: #fff;

  position: fixed;
  bottom: 0;
  left: 0;

  padding: 0 31px;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: #52b6ff;
`;

const Button = styled.button`
  height: 91px;
  width: 91px;

  font-size: 18px;
  color: #fff;

  background-color: #52b6ff;

  border: none;
  border-radius: 50%;

  margin-bottom: 42px;

  cursor: pointer;
`;
