import { selector } from "recoil";

import { elapsedState } from "./atom";
import { MAX_MINUTES, ONE_MINUTE_MS } from "../constants";
import makeNumberToTwoString from "../utils/makeNumberToTwoString";

export const remainingState = selector({
  key: "remainingState",
  get: ({ get }) => {
    const elapsed = get(elapsedState);
    return MAX_MINUTES * ONE_MINUTE_MS - elapsed;
  },
});

export const displayClockData = selector({
  key: "displayClockDataState",
  get: ({ get }) => {
    const remaining = get(remainingState);

    const displayMinutes = Math.floor(remaining / ONE_MINUTE_MS);
    const displaySeconds =
      Math.round((remaining / 1000) % 60) === 60
        ? 0
        : Math.round((remaining / 1000) % 60);

    return [
      makeNumberToTwoString(displayMinutes),
      makeNumberToTwoString(displaySeconds),
    ];
  },
});
