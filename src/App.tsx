import PomodoroClcok from "./components/PomodoroClock";
import PomodoroStatus from "./components/PomodoroStatus";
import PomodoroControlButton from "./components/PomodoroControlButton";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <PomodoroClcok />
      <PomodoroControlButton />
      <PomodoroStatus />
    </Layout>
  );
}

export default App;
