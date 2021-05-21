import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import axios from "axios";
import { useContext } from "react";

export default function Habit({ title, days, id, setHabits }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { token } = useContext(UserContext);

  return (
    <Div>
      <Title>{title}</Title>
      <BsTrash onClick={deleteHabit} />
      {weekdays.map((w, i) => (
        <Day key={i} selected={days.includes(i)}>
          {w}
        </Day>
      ))}
    </Div>
  );
  function deleteHabit() {
    const shouldContinue = window.confirm(
      "Tem certeza que quer excluir este hábito?"
    );

    if (!shouldContinue) return;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      config
    );

    promise.then(() => setHabits(null));
  }
}

const Div = styled.div`
  height: 91px;
  width: 340px;

  background-color: #fff;

  border-radius: 5px;

  margin-bottom: 10px;
  padding: 13px 10px 15px 15px;

  position: relative;

  svg {
    width: 16px;

    color: #666;

    position: absolute;
    top: 11px;
    right: 11px;
  }
`;

const Title = styled.p`
  font-size: 20px;

  color: #666;
  margin-bottom: 10px;
`;

const Day = styled.button`
  height: 30px;
  width: 30px;

  font-size: 20px;
  color: ${({ selected }) => (selected ? "#fff" : "#dbdbdb")};

  background-color: ${({ selected }) => (selected ? "#cfcfcf" : "#fff")};

  border: 1px solid ${({ selected }) => (selected ? "#cfcfcf" : "#d5d5d5")};
  border-radius: 5px;

  margin-right: 4px;

  padding-bottom: 2px;
`;
