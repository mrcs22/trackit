import Loader from "react-loader-spinner";

import Banner from "../Banner";
import Input from "../Input";
import Button from "../Button";
import A from "../A";

import bannerImg from "../../images/banner.svg";
import { useState } from "react";

export default function Login() {
  const [inputData, setInputData] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);

  function saveInputData(event, dataKey) {
    inputData[dataKey] = event.target.value;
    setInputData({ ...inputData });
  }

  return (
    <>
      <Banner src={bannerImg} />
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
      <Button disabled={isRegistering} onClick={() => setIsRegistering(true)}>
        {isRegistering ? ThreeDots : "Cadastrar"}
      </Button>

      <A>Já tem uma conta? Faça login!</A>
    </>
  );
}

const ThreeDots = (
  <Loader type="ThreeDots" color="#FFF" height={13} width={51} />
);
