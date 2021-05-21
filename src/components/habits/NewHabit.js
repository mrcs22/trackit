import { useState } from "react";
import styled from "styled-components";
import HabitMaker from "./HabitMaker";

export default function NewHabit({ setHabits }) {
  const [showHabitMaker, setShowHabitMaker] = useState(false);

  return (
    <>
      <Div>
        <P>Meus hábitos</P>
        <Button onClick={() => setShowHabitMaker(!showHabitMaker)}>+</Button>
      </Div>
      <HabitMaker
        shouldShow={showHabitMaker}
        setHabits={setHabits}
        setShowHabitMaker={setShowHabitMaker}
      />
    </>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 23px;
  color: #126ba5;
`;

const Button = styled.button`
  height: 35px;
  width: 40px;

  font-size: 27px;
  color: #fff;

  background-color: #52b6ff;

  border-radius: 5px;
  border: none;

  padding-bottom: 5px;
  margin-bottom: 20px;
`;
