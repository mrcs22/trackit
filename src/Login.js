import styled from "styled-components";

import bannerImg from "./images/banner.svg";

export default function Login() {
  return (
    <>
      <Banner src={bannerImg} />
      <Input type="text" placeholder="email" />
      <Input type="password" placeholder="senha" />
      <Input type="button" value="Entrar" blue />
      <A>Não tem uma conta? Cadastre-se</A>
    </>
  );
}

const Banner = styled.img`
  display: block;
  width: 180px;
  margin: 0 auto;
  margin-top: 68px;
  margin-bottom: 32px;
`;

const Input = styled.input`
  display: block;
  height: 45px;
  width: 303px;

  border: ${({ blue }) => (blue ? "none" : "1px solid #d5d5d5")};
  border-radius: 5px;

  color: ${({ blue }) => (blue ? "#fff" : "#000")};
  font-size: ${({ blue }) => (blue ? "20px" : "16px")};
  line-height: 20px;

  background-color: ${({ blue }) => (blue ? "#52B6FF" : "#fff")};

  margin: 0 auto;
  margin-bottom: 6px;
  padding: 11px;

  ::placeholder {
    color: #dbdbdb;
    font-size: 20px;
  }

  &:focus {
    outline: none;
  }
`;

const A = styled.a`
  display: block;

  font-size: 14px;
  color: #52b6ff;
  text-align: center;
  text-decoration: underline;

  margin: 25px auto;

  cursor: pointer;
`;
