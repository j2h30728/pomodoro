import { useRecoilValue } from "recoil";

import { displayColockData } from "../recoil/selector";

const PomodoroClcok = () => {
  const [displayMinutes, displaySeconds] = useRecoilValue(displayColockData);

  return (
    <div>
      <span>{displayMinutes}</span>
      <span>:</span>
      <span>{displaySeconds}</span>
    </div>
  );
};

export default PomodoroClcok;
