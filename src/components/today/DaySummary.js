import styled from "styled-components";

import date from "../../helpers/date";

export default function DaySummary({ percentage }) {
  const { weekDay, day } = date;
  return (
    <>
      <Title>
        {weekDay}, {day}
      </Title>
      <Subtitle percentage={percentage}>
        {percentage > 0
          ? `${percentage}% dos hábitos concluídos`
          : "Nenhum hábito concluído ainda"}
      </Subtitle>
    </>
  );
}

const Title = styled.p`
  font-size: 23px;
  line-height: 28px;
  color: #126ba5;
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 22.5px;
  color: ${({ percentage }) => (percentage > 0 ? "#8FC549" : "#bababa")};

  margin-bottom: 28px;
`;
