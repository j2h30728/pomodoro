interface PomodoroClcokProps {
  displayMinutes: string;
  displaySeconds: string;
}
const PomodoroClcok = ({
  displayMinutes,
  displaySeconds,
}: PomodoroClcokProps) => {
  return (
    <div>
      <span>{displayMinutes}</span>
      <span>:</span>
      <span>{displaySeconds}</span>
    </div>
  );
};

export default PomodoroClcok;
