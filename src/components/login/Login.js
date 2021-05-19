import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import Banner from "../Banner";
import Input from "../Input";
import Button from "../Button";
import StyledLink from "../StyledLink";

export default function Login() {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [isLogging, setIsLogging] = useState(false);

  return (
    <>
      <Banner />
      <Input
        value={inputData.email}
        onChange={(e) => {
          inputData.email = e.target.value;
          setInputData({ ...inputData });
        }}
        type="text"
        placeholder="email"
        disabled={isLogging}
      />
      <Input
        value={inputData.password}
        onChange={(e) => {
          inputData.password = e.target.value;
          setInputData({ ...inputData });
        }}
        type="password"
        placeholder="senha"
        disabled={isLogging}
      />
      <Button disabled={isLogging} onClick={tryLogin}>
        {isLogging ? ThreeDots : "Entrar"}
      </Button>
      <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se</StyledLink>
    </>
  );

  function tryLogin() {
    setIsLogging(true);
    console.log(inputData);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      inputData
    );

    promise.then((res) => {
      console.log(res.data);
    });

    promise.catch((err) => {
      console.log(err.response);
      if (err.response.status === 401) alert("Usuário e/ou senha incorretos!");
      else alert("Usuário e/ou senha inválidos!");

      setIsLogging(false);
    });
  }
}

const ThreeDots = (
  <Loader type="ThreeDots" color="#FFF" height={13} width={51} />
);
