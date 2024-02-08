import { describe, it, expect } from "vitest";
import deepFreeze from "deep-freeze";
import {noteReducer} from "../store/notesReducer";
import deepFreeze from 'deep-freeze'

describe("noteReducer", () => {
  it("returns new state with action NEW_NOTE", () => {
    const state = [];
    const action = {
      type: "NEW_NOTE",
      payload: {
        content: "the app state is in redux store",
        important: true,
        id: 1,
      },
    };

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.payload)
  });
});
