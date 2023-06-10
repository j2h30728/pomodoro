import { useRecoilValue } from "recoil";

import { displayColockData } from "../recoil/selector";
import styled from "styled-components";

const PomodoroClcok = () => {
  const [displayMinutes, displaySeconds] = useRecoilValue(displayColockData);

  return (
    <ClcokWrapper>
      <TimeWrapper>{displayMinutes}</TimeWrapper>
      <Colons>:</Colons>
      <TimeWrapper>{displaySeconds}</TimeWrapper>
    </ClcokWrapper>
  );
};

export default PomodoroClcok;

const ClcokWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TimeWrapper = styled.div`
  background-color: white;
  color: tomato;
  font-size: 90px;
  padding: 100px 30px;
  width: 150px;
  text-align: center;
  border-radius: 20px;
  text-shadow: 1px 2px 1px gray;
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.4);
`;

const Colons = styled.div`
  font-size: 90px;
  color: rgba(255, 255, 255, 0.5);
`;
