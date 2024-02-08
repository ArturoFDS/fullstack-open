import { createStore } from "redux";

const initialState = {
  good: 5,
  ok: 4,
  bad: 2,
};

export const votesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOOD":
      return { good: state.good + 1, ok: state.ok, bad: state.bad };
    case "OK":
      return { good: state.good, ok: state.ok + 1, bad: state.bad };
    case "BAD":
      return { good: state.good, ok: state.ok, bad: state.bad + 1 };
    case "RESET STATS":
      return { good: 0, ok: 0, bad: 0 };
    default:
      return state;
  }
};

const store = createStore(votesReducer);
store.subscribe(() => {
  const storeNow = store.getState();
  console.log(storeNow);
});

export default store;
