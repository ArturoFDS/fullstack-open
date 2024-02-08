import { describe, it, expect } from "vitest";
import {votesReducer} from "../store/votesReducer";
import deepFreeze from "deep-freeze";
describe("Votes Reducer", () => {
  const initialState = {
    good: 5,
    ok: 4,
    bad: 2,
  };
  it("Should return a proper initial state when called with undefined state", () => {
    const state = initialState;
    const action = {
      type: "DO_NOTHING",
    };

    const newState = votesReducer(state, action);
    expect(newState).toEqual(initialState);
  });

  it("Should increment GOOD", () => {
    const state = initialState
    const action = {
      type: "GOOD",
    };

    deepFreeze(state)
    const newState = votesReducer(state, action);
    expect(newState).toEqual({
      good: 6,
      ok: 4,
      bad: 2,
    });
  });
});
