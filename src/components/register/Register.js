import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import Banner from "../Banner";
import Input from "../Input";
import Button from "../Button";
import StyledLink from "../StyledLink";

export default function Login() {
  const [inputData, setInputData] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);
  const history = useHistory();

  function saveInputData(event, dataKey) {
    inputData[dataKey] = event.target.value;
    setInputData({ ...inputData });
  }

  return (
    <>
      <Banner />
      <Input
        value={inputData.email || ""}
        onChange={(e) => saveInputData(e, "email")}
        type="text"
        placeholder="email"
        disabled={isRegistering}
      />
      <Input
        value={inputData.password || ""}
        onChange={(e) => saveInputData(e, "password")}
        type="password"
        placeholder="senha"
        disabled={isRegistering}
      />
      <Input
        value={inputData.name || ""}
        onChange={(e) => saveInputData(e, "name")}
        type="text"
        placeholder="nome"
        disabled={isRegistering}
      />
      <Input
        value={inputData.image || ""}
        onChange={(e) => saveInputData(e, "image")}
        type="text"
        placeholder="foto"
        disabled={isRegistering}
      />
      <Button disabled={isRegistering} onClick={tryRegister}>
        {isRegistering ? ThreeDots : "Cadastrar"}
      </Button>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </>
  );

  function tryRegister() {
    setIsRegistering(true);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      inputData
    );

    promise.then(() => {
      history.push("/");
    });

    promise.catch(() => {
      alert("Alguma coisa não saiu bem.");
      setIsRegistering(false);
    });
  }
}

const ThreeDots = (
  <Loader type="ThreeDots" color="#FFF" height={13} width={51} />
);
