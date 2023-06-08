import { useEffect, useRef, useState } from "react";

const ONE_MINUTE_MS = 60 * 1000 * 1;
const MAX_MINUTES = 25;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [elapsed, setElapsed] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [goal, setGoal] = useState<number>(0);

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
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (!isPlaying && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, startTime]);

  useEffect(() => {
    const remaining = MAX_MINUTES * ONE_MINUTE_MS - elapsed;

    if (remaining <= 0 && isPlaying) {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setRound(prev => prev + 1);
      setStartTime(Date.now());
      setElapsed(0);
    }
  }, [elapsed, isPlaying, round, goal]);

  useEffect(() => {
    if (round === 4) {
      setGoal(prev => prev + 1);
      setRound(0);
      if (goal > 12) {
        setGoal(0);
      }
    }
  }, [round, goal]);

  const remaining = MAX_MINUTES * ONE_MINUTE_MS - elapsed;

  const displayMinutes = Math.floor(remaining / ONE_MINUTE_MS);
  const displaySeconds = Math.floor((remaining / 1000) % 60);

  return (
    <>
      <h1>Pomodoro</h1>
      <div>
        <span>{displayMinutes.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{displaySeconds.toString().padStart(2, "0")}</span>
      </div>
      <button onClick={handleTogglePlay}>
        {isPlaying ? "일시정지" : "재생"}
      </button>
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
    </>
  );
}

export default App;
