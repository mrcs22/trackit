import styled from "styled-components";

const Div = styled.div`
  min-height: 100vh;
  width: 100%;

  background-color: #f2f2f2;

  padding: 98px 17px;
  padding-bottom: 95px;

  & > div {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function Container({ children }) {
  return (
    <Div>
      <div>{children}</div>
    </Div>
  );
}
