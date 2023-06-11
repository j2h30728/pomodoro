import styled from "styled-components";

import { usePomodoroStatusCounter } from "../hooks";

const PomodoroStatus = () => {
  const { round, goal } = usePomodoroStatusCounter();
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
