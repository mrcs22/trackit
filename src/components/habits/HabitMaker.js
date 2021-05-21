import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import axios from "axios";
import { useContext, useState } from "react";

export default function HabitMaker({
  setHabits,
  setShowHabitMaker,
  shouldShow,
}) {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { token } = useContext(UserContext);

  return (
    <Div shouldShow={shouldShow}>
      <Input
        disabled={isloading}
        value={name}
        placeholder="nome do hábito"
        onChange={(e) => setName(e.target.value)}
      />

      {weekdays.map((w, i) => (
        <Day
          disabled={isloading}
          key={i}
          selected={days.includes(i)}
          onClick={() => toggleDay(i)}
        >
          {w}
        </Day>
      ))}

      <div>
        <A onClick={() => setShowHabitMaker(false)}>Cancelar</A>
        <Save onClick={saveNewHabit}>Salvar</Save>
      </div>
    </Div>
  );

  function toggleDay(day) {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
      return;
    }
    setDays([...days, day]);
  }

  function saveNewHabit() {
    if (name === "") {
      alert("Insira um nome");
      return;
    }
    setIsLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
      { name, days },
      config
    );
    promise.then(() => {
      setHabits(null);
      setName("");
      setDays([]);
      setShowHabitMaker(false);
      setIsLoading(false);
    });

    promise.catch(() => {
      alert("Algo deu errado");
      setIsLoading(false);
    });
  }
}

const Div = styled.div`
  display: ${({ shouldShow }) => (shouldShow ? "block" : "none")};
  height: 180px;
  width: 340px;

  background-color: #fff;

  border-radius: 5px;

  margin-bottom: 10px;
  padding: 18px 10px 15px 19px;

  position: relative;

  div {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 32px;
    padding-right: 9px;
  }
`;

const Input = styled.input`
  height: 45px;
  width: 303px;

  font-size: 20px;
  color: #666;

  background-color: #fff;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  padding: 9px 11px;

  margin-bottom: 8px;
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

const Save = styled.button`
  height: 35px;
  width: 84px;

  font-size: 16px;
  color: #fff;

  background-color: #52b6ff;

  margin-left: 23px;

  border-radius: 5px;
  border: none;
`;

const A = styled.a`
  font-size: 16px;
  color: #52b6ff;
`;
