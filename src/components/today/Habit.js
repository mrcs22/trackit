import styled from "styled-components";
import check from "../../images/check.svg";

export default function Habit(props) {
  const { name, currentSequence, highestSequence, done } = props;

  return (
    <Div>
      <div>
        <Title>{name}</Title>
        <SubTitle done={done}>
          Sequência atual:<span>{currentSequence} dias</span>
        </SubTitle>
        <SubTitle currentSequence={highestSequence}>
          Seu record: <span>{highestSequence} dias</span>
        </SubTitle>
      </div>
      <Button done={done}>
        <img src={check} />
      </Button>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 94px;
  width: 340px;

  background-color: #fff;

  border-radius: 5px;
  padding: 13px;

  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 20px;
  color: #666;

  margin-bottom: 7px;
`;

const SubTitle = styled.p`
  font-size: 13px;
  color: #666;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 69px;
  width: 69px;

  background-color: ${({ done }) => (done ? "#8fc549" : "#ebebeb")};
  color: #fff;

  border-radius: 5px;
  border: ${({ done }) => (done ? "none" : "1px solid #E7E7E7")};

  img {
    width: 35px;
  }
`;
