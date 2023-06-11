import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { MAX_GOAL, MAX_ROUND } from "../constants";
import { goalState, remainingState, roundState } from "../recoil";

const usePomodoroStatusCounter = () => {
  const [goal, setGoal] = useRecoilState(goalState);
  const [round, setRound] = useRecoilState(roundState);
  const remaining = useRecoilValue(remainingState);

  useEffect(() => {
    if (goal > MAX_GOAL) setGoal(0);

    if (remaining < 0) {
      setRound(prev => prev + 1);
    }
    if (round > MAX_ROUND) {
      setGoal(prev => prev + 1);
      setRound(1);
    }
  }, [round, goal, setGoal, setRound, remaining]);

  return { round, goal };
};

export default usePomodoroStatusCounter;
