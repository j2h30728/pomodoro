import { atom } from "recoil";

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

export const startTimeState = atom({
  key: "startTimeState",
  default: Date.now(),
});

export const elapsedState = atom({
  key: "elapsedState",
  default: 0,
});

export const roundState = atom({
  key: "roundState",
  default: 0,
});

export const goalState = atom({
  key: "goalState",
  default: 0,
});
