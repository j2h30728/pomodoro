import {
  Layout,
  PomodoroClcok,
  PomodoroControlButton,
  PomodoroStatus,
} from "./components";

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
