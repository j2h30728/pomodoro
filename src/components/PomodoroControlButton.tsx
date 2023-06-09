import usePomodoroTimer from "../hooks/usePomodoroTimer";

const PomodoroControlButton = () => {
  const { handleTogglePlay, isPlaying } = usePomodoroTimer();
  return (
    <button onClick={handleTogglePlay}>
      {isPlaying ? "일시정지" : "재생"}
    </button>
  );
};

export default PomodoroControlButton;
