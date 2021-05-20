import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import Header from "../Header";
import Container from "../Container";
import DaySummary from "./DaySummary";
import Menu from "../Menu";
import Habits from "./Habits";

export default function Today() {
  const context = useContext(UserContext);
  const history = useHistory();

  const [habits, setHabits] = useState(null);

  if (context === null) {
    history.push("/");
    return null;
  }

  const percentage = getPercentage();

  fetchHabits();

  return (
    <Container>
      <Header />
      <DaySummary percentage={percentage} />
      <Habits habits={habits} setHabits={setHabits} />
      <Menu percentage={percentage} />
    </Container>
  );

  function getPercentage() {
    return habits
      ? (habits.filter((h) => h.done).length / habits.length).toFixed(2) * 100
      : 0;
  }

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
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
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
