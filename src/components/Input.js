import styled from "styled-components";

export default styled.input`
  display: block;
  height: 45px;
  width: 303px;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-size: "16px";
  line-height: 20px;

  background-color: "#fff";

  margin: 0 auto;
  margin-bottom: 6px;
  padding: 11px;

  transition: all 0.4s;

  ::placeholder {
    color: #dbdbdb;
    font-size: 20px;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #afafaf;
  }
`;
