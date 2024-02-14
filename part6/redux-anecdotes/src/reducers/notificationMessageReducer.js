import { createSlice } from "@reduxjs/toolkit";

const initialState = "";
const notificationMessageSlice = createSlice({
  name: "notificationMessage",
  initialState,
  reducers: {
    VOTING_MESSAGE(state, action) {
      return `You voted "${action.payload.anecdote}"`;
    },
    CREATING_MESSAGE(state, action) {
      return `You created "${action.payload.anecdote}"`;
    },
  },
});

export default notificationMessageSlice.reducer;
