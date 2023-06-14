import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Variants, motion } from "framer-motion";

import { displayClockDataState } from "../recoil";

const PomodoroClock = () => {
  const [displayMinutes, displaySeconds] = useRecoilValue(
    displayClockDataState
  );

  return (
    <ClockWrapper>
      <TimeWrapper
        initial="initial"
        animate="animate"
        transition={{ type: "spring" }}
        variants={pomodoroTimerVariants}
        key={`minutes-${displayMinutes}`}>
        {displayMinutes}
      </TimeWrapper>
      <Colons>:</Colons>
      <TimeWrapper
        initial="initial"
        animate="animate"
        transition={{ type: "spring" }}
        variants={pomodoroTimerVariants}
        key={`seconds-${displaySeconds}`}>
        {displaySeconds}
      </TimeWrapper>
    </ClockWrapper>
  );
};

export default PomodoroClock;

const pomodoroTimerVariants: Variants = {
  initial: { scale: 0.8, opacity: 0.3 },
  animate: { scale: 1.0, opacity: 1 },
};

const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TimeWrapper = styled(motion.div)`
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
