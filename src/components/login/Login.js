import Loader from "react-loader-spinner";

import Banner from "../Banner";
import Input from "../Input";
import Button from "../Button";
import A from "../A";

import bannerImg from "../../images/banner.svg";
import { useState } from "react";

export default function Login() {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [isLogging, setIsLogging] = useState(false);

  return (
    <>
      <Banner src={bannerImg} />
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
      <Button disabled={isLogging} onClick={() => setIsLogging(true)}>
        {isLogging ? ThreeDots : "Entrar"}
      </Button>
      <A>Não tem uma conta? Cadastre-se</A>
    </>
  );
}

const ThreeDots = (
  <Loader type="ThreeDots" color="#FFF" height={13} width={51} />
);
