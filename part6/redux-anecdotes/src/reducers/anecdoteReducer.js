import { createSlice } from "@reduxjs/toolkit";
import { createAnecdotes } from "../services/fetchingBackend";
/* eslint-disable no-case-declarations */

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    changeAnecdote(state, action) {
      const anecdoteToChange = state.find((n) => n.id === action.payload.id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== action.payload.id ? anecdote : changedAnecdote
      );
    },
    createNewAnecdote(state, action) {
      const newAnecdote = action.payload;
      createAnecdotes(action.payload);
      return [...state, newAnecdote];
    },
    appendAnecdotes(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export default anecdoteSlice.reducer;
