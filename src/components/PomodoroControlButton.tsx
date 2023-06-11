import styled from "styled-components";
import { motion } from "framer-motion";

import { PauseIcon, PlayIcon } from "../icons";
import { usePomodoroTimer } from "../hooks";

const PomodoroControlButton = () => {
  const { handleTogglePlay, isPlaying } = usePomodoroTimer();

  return (
    <ControlButton
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleTogglePlay}>
      {isPlaying ? <PlayIcon /> : <PauseIcon />}
    </ControlButton>
  );
};

export default PomodoroControlButton;

const ControlButton = styled(motion.div)`
  width: 60px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
