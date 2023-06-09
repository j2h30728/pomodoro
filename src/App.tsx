import PomodoroClcok from "./components/PomodoroClock";
import PomodoroStatus from "./components/PomodoroStatus";
import PomodoroControlButton from "./components/PomodoroControlButton";

function App() {
  return (
    <>
      <h1>Pomodoro</h1>
      <PomodoroClcok />
      <PomodoroControlButton />
      <PomodoroStatus />
    </>
  );
}

export default App;
