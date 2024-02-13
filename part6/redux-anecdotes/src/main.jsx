import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import anecdotesReducer from "./reducers/anecdoteReducer";
import { filteringReducer } from "./reducers/filteringReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    filter: filteringReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
