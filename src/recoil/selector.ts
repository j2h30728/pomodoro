import { selector } from "recoil";

import { elapsedState } from "./atom";
import {
  MAX_MINUTES,
  ONE_MINUTE,
  ONE_MINUTE_MS,
  ONE_SECOND_MS,
} from "../constants";
import makeNumberToTwoString from "../utils/makeNumberToTwoString";

export const remainingState = selector({
  key: "remainingState",
  get: ({ get }) => {
    const elapsed = get(elapsedState);
    return MAX_MINUTES * ONE_MINUTE_MS - elapsed;
  },
});

export const displayClockDataState = selector({
  key: "displayClockDataState",
  get: ({ get }) => {
    const remaining = get(remainingState);

    const displayMinutes = Math.floor(remaining / ONE_MINUTE_MS);
    const displaySeconds =
      Math.round((remaining / ONE_SECOND_MS) % ONE_MINUTE) === ONE_MINUTE
        ? 0
        : Math.round((remaining / ONE_SECOND_MS) % ONE_MINUTE);

    return [
      makeNumberToTwoString(displayMinutes),
      makeNumberToTwoString(displaySeconds),
    ];
  },
});
