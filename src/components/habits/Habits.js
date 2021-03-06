import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router";

import Header from "../Header";
import Container from "../Container";

import axios from "axios";

import Menu from "../Menu";
import NewHabit from "./NewHabit";
import NoHabit from "./NoHabit";
import Habit from "./Habit";

import PuffLoader from "./Loader";
export default function Habits() {
  const context = useContext(UserContext);
  const history = useHistory();
  const [habits, setHabits] = useState(null);

  if (context === null) {
    history.push("/");
    return null;
  }

  fetchHabits();

  return (
    <>
      <Header />
      <Container>
        <NewHabit setHabits={setHabits} />

        {habits === null ? <PuffLoader /> : habits.length ? "" : <NoHabit />}

        {habits &&
          habits.map((h) => (
            <Habit
              key={h.id}
              id={h.id}
              title={h.name}
              days={h.days}
              setHabits={setHabits}
            />
          ))}
      </Container>
      <Menu percentage={context.percentage} />
    </>
  );

  function fetchHabits() {
    if (habits !== null) {
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${context.token}`,
      },
    };

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/",
      config
    );

    promise.then((res) => {
      setHabits(res.data);
    });

    promise.catch((err) => {
      alert("Algo deu errado");
      console.log(err.message);
    });
  }
}
