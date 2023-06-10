import styled from "styled-components";

import usePomodoroTimer from "../hooks/usePomodoroTimer";

const PomodoroControlButton = () => {
  const { handleTogglePlay, isPlaying } = usePomodoroTimer();
  return (
    <ControlButton onClick={handleTogglePlay}>
      {isPlaying ? (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></path>
        </svg>
      ) : (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
        </svg>
      )}
    </ControlButton>
  );
};

export default PomodoroControlButton;

const ControlButton = styled.div`
  width: 60px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
