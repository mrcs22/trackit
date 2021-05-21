import styled from "styled-components";

export default function Habit({ title, days }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <Div>
      <Title>{title}</Title>
      {weekdays.map((w, i) => (
        <Day key={i} selected={days.includes(i)}>
          {w}
        </Day>
      ))}
    </Div>
  );
}

const Div = styled.div`
  height: 91px;
  width: 340px;

  background-color: #fff;

  border-radius: 5px;

  margin-bottom: 10px;
  padding: 13px 10px 15px 15px;
`;

const Title = styled.p`
  font-size: 20px;

  color: #666;
  margin-bottom: 10px;
`;

const Day = styled.button`
  height: 30px;
  width: 30px;

  font-size: 20px;
  color: ${({ selected }) => (selected ? "#fff" : "#dbdbdb")};

  background-color: ${({ selected }) => (selected ? "#cfcfcf" : "#fff")};

  border: 1px solid ${({ selected }) => (selected ? "#cfcfcf" : "#d5d5d5")};
  border-radius: 5px;

  margin-right: 4px;

  padding-bottom: 2px;
`;
