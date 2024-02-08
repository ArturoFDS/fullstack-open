/* eslint-disable no-return-assign */
import { createStore } from "redux";
export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.payload];
    case "CHANGE_IMPORTANCE":
      const id = action.payload.id;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    default:
      return state;
  }
};

const store = createStore(noteReducer);
store.subscribe(() => {
  const storeNow = store.getState();
  console.log(storeNow);
});
export default store;
