import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useRef, useState } from "react";

import { elapsedState, goalState, roundState } from "../recoil/atom";
import { remainingState } from "../recoil/selector";
import { MAX_GOAL, ONE_SECOND_MS } from "../constants";

const usePomodoroTimer = () => {
  const [elapsed, setElapsed] = useRecoilState(elapsedState);
  const [goal, setGoal] = useRecoilState(goalState);
  const setRound = useSetRecoilState(roundState);

  const remaining = useRecoilValue(remainingState);

  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const intervalRef = useRef<number>(0);

  const handleTogglePlay = () => {
    if (goal === MAX_GOAL) setGoal(0);

    if (!isPlaying) {
      setIsPlaying(true);
      setStartTime(Date.now() - elapsed);
    }
    if (isPlaying) {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, ONE_SECOND_MS);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, startTime, setElapsed]);

  useEffect(() => {
    if (remaining <= 0 && isPlaying) {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
      setElapsed(0);
      setRound(prev => prev + 1);
    }
  }, [remaining, isPlaying, setRound, setElapsed]);

  return { handleTogglePlay, isPlaying };
};

export default usePomodoroTimer;
