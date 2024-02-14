import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import anecdotesReducer from "./reducers/anecdoteReducer";
import filteringReducer from "./reducers/filteringReducer";
import notificationMessageReducer from "./reducers/notificationMessageReducer";
import { getAnecdotes } from "./services/fetchingBackend";

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    filter: filteringReducer,
    notificationMessage: notificationMessageReducer,
  },
});

getAnecdotes().then((res) =>
  store.dispatch({ type: "anecdotes/setAnecdotes", payload: res })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
