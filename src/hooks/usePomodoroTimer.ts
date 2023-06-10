import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useRef } from "react";

import {
  elapsedState,
  goalState,
  isPlayingState,
  startTimeState,
} from "../recoil/atom";
import { remainingState } from "../recoil/selector";
import { ONE_SECOND_MS } from "../constants";

const usePomodoroTimer = () => {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [startTime, setStartTime] = useRecoilState(startTimeState);
  const [elapsed, setElapsed] = useRecoilState(elapsedState);
  const setRound = useSetRecoilState(goalState);

  const remaining = useRecoilValue(remainingState);

  const intervalRef = useRef<number>(0);

  const handleTogglePlay = () => {
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
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (!isPlaying && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, startTime, setElapsed]);

  useEffect(() => {
    if (remaining <= 0 && isPlaying) {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setRound(prev => prev + 1);
      setStartTime(Date.now());
      setElapsed(0);
    }
  }, [isPlaying, remaining, setElapsed, setIsPlaying, setRound, setStartTime]);

  return { handleTogglePlay, isPlaying };
};

export default usePomodoroTimer;
