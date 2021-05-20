import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import Header from "../Header";
import Container from "../Container";
import DaySummary from "./DaySummary";
import Menu from "../Menu";

export default function Today() {
  const context = useContext(UserContext);
  const history = useHistory();

  const [habits, setHabits] = useState(null);
  console.log(habits);

  if (context === null) {
    history.push("/");
    return null;
  }

  fetchHabits();

  return (
    <Container>
      <Header />
      <DaySummary percentage="10" />
      <Menu />
    </Container>
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
