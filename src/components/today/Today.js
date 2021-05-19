import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

import Header from "../Header";
import Container from "../Container";
import Menu from "../Menu";
import { useHistory } from "react-router";

export default function Today() {
  const context = useContext(UserContext);
  const history = useHistory();

  if (context === null) {
    history.push("/");
    return null;
  }

  return (
    <Container>
      <Header />
      <Menu />
    </Container>
  );
}
