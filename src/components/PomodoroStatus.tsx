import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { goalState } from "../recoil/atom";

const PomodoroStatus = () => {
  const [goal, setGoal] = useRecoilState(goalState);
  const [round, setRound] = useRecoilState(goalState);

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
    <div>
      <div>
        <div>{round}/4</div>
        <span>ROUND</span>
      </div>
      <div>
        <div>{goal}/12</div>
        <span>GOAL</span>
      </div>
    </div>
  );
};
export default PomodoroStatus;
