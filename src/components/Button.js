import styled from "styled-components";

export default styled.button`
  display: block;
  height: 45px;
  width: 303px;

  border: none;
  border-radius: 5px;

  color: #fff;
  font-size: 20px;
  line-height: 20px;

  background-color: #52b6ff;

  margin: 0 auto;
  margin-bottom: 6px;
  padding: 11px;

  transition: all 0.4s;

  &:disabled {
    opacity: 0.7;
  }
`;
