interface PomodoroStatusProps {
  round: number;
  goal: number;
}

const PomodoroStatus = ({ round, goal }: PomodoroStatusProps) => {
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
