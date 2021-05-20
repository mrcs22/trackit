import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import styled from "styled-components";

import check from "../../images/check.svg";
import axios from "axios";

export default function Habit(props) {
  const { name, currentSequence, highestSequence, done, id, setHabits } = props;
  const { token } = useContext(UserContext);
  const [isTogglingHabitCheck, setIsTogglingHabitCheck] = useState(false);
  const isANewRecord =
    currentSequence >= highestSequence && currentSequence > 0;

  return (
    <Div>
      <div>
        <Title>{name}</Title>
        <SubTitle done={done}>
          Sequência atual:
          <span id="currentSequence">{currentSequence} dias</span>
        </SubTitle>
        <SubTitle isANewRecord={isANewRecord}>
          Seu record: <span id="highestSequence">{highestSequence} dias</span>
        </SubTitle>
      </div>
      <Button done={done} onClick={toggleHabitCheck}>
        <img src={check} alt="Concluído" />
      </Button>
    </Div>
  );

  function toggleHabitCheck() {
    if (isTogglingHabitCheck) {
      return;
    }

    setIsTogglingHabitCheck(true);

    const urlForCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const urlForUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    const url = done ? urlForUncheck : urlForCheck;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(url, {}, config);

    promise.then(() => {
      updateHabits(config);
    });

    promise.catch((err) => {
      console.log(err.data);
      alert("Algo deu errado");
    });
  }

  function updateHabits(config) {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((res) => {
      setHabits(res.data);
      setIsTogglingHabitCheck(false);
    });

    promise.catch((err) => {
      alert("Algo deu errado");
      console.log(err.message);
    });
  }
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 94px;
  width: 340px;

  background-color: #fff;

  border-radius: 5px;
  padding: 13px;

  margin: 0 auto;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  color: #666;

  margin-bottom: 7px;
`;

const SubTitle = styled.p`
  font-size: 13px;
  color: #666;

  #currentSequence {
    color: ${({ done }) => (done ? "#8FC549" : "#666")};
  }

  #highestSequence {
    color: ${({ isANewRecord }) => (isANewRecord ? "#8FC549" : "#666")};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 69px;
  width: 69px;

  background-color: ${({ done }) => (done ? "#8fc549" : "#ebebeb")};
  color: #fff;

  border-radius: 5px;
  border: ${({ done }) => (done ? "none" : "1px solid #E7E7E7")};

  img {
    width: 35px;
  }
`;
