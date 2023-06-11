import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useRef, useState } from "react";

import { elapsedState } from "../recoil/atom";
import { remainingState } from "../recoil/selector";
import { ONE_SECOND_MS } from "../constants";

const usePomodoroTimer = () => {
  const [elapsed, setElapsed] = useRecoilState(elapsedState);
  const remaining = useRecoilValue(remainingState);

  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState(0);

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
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, startTime, setElapsed]);

  useEffect(() => {
    if (remaining < 0 && isPlaying) {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
      setElapsed(0);
    }
  }, [remaining, isPlaying, setElapsed]);

  return { handleTogglePlay, isPlaying };
};

export default usePomodoroTimer;
