import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { goalState, roundState } from "../recoil/atom";

const PomodoroStatus = () => {
  const [goal, setGoal] = useRecoilState(goalState);
  const [round, setRound] = useRecoilState(roundState);

  useEffect(() => {
    if (round === 4) {
      setGoal(prev => prev + 1);
      setRound(0);
      if (goal > 12) {
        setGoal(0);
      }
    }
  }, [round, goal, setGoal, setRound]);

  return (
    <StatusContainer>
      <StatusWrapper>
        <StatusValue>{round}/4</StatusValue>
        <span>ROUND</span>
      </StatusWrapper>
      <StatusWrapper>
        <StatusValue>{goal}/12</StatusValue>
        <span>GOAL</span>
      </StatusWrapper>
    </StatusContainer>
  );
};
export default PomodoroStatus;

const StatusContainer = styled.div`
  display: flex;
  color: white;
  font-size: 30px;
`;

const StatusWrapper = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StatusValue = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;
