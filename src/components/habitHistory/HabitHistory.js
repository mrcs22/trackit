import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useHistory } from "react-router";

import Header from "../Header";
import Container from "../Container";

import Menu from "../Menu";
import styled from "styled-components";

export default function HabitHistory() {
  const context = useContext(UserContext);
  const history = useHistory();

  if (context === null) {
    history.push("/");
    return null;
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Histórico</Title>
        <Subtitle>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </Subtitle>
      </Container>
      <Menu percentage={context.percentage} />
    </>
  );
}

const Title = styled.p`
  font-size: 23px;
  color: #126ba5;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;

  margin-top: 17px;
`;
