import {
  Layout,
  PomodoroClock,
  PomodoroControlButton,
  PomodoroStatus,
} from "./components";

function App() {
  return (
    <Layout>
      <PomodoroClock />
      <PomodoroControlButton />
      <PomodoroStatus />
    </Layout>
  );
}

export default App;
