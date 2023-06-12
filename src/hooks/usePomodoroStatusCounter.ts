import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { MAX_GOAL, MAX_ROUND } from "../constants";
import { remainingState } from "../recoil";

const usePomodoroStatusCounter = () => {
  const [goal, setGoal] = useState<number>(0);
  const [round, setRound] = useState<number>(0);

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
