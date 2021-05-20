import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Menu({ percentage }) {
  const history = useHistory();
  return (
    <Div>
      <StyledLink to="/habitos">Hábitos</StyledLink>

      <Button onClick={goToToday}>
        <CircularProgressbar
          value={percentage}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52b6ff",
            textColor: "#fff",
            textSize: "18px",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Button>

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
  min-width: 300px;

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

  border: none;
  border-radius: 50%;

  margin-bottom: 42px;

  cursor: pointer;
`;
