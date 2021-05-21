import styled from "styled-components";

export default function NoHabit() {
  return (
    <P>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
      começar a trackear!
    </P>
  );
}

const P = styled.p`
  font-size: 18px;
  color: #666;

  margin-top: 9px;

  max-width: 341px;

  margin-top: 19px;
`;
