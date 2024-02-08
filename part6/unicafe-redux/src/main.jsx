import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { votesReducer } from "../store/votesReducer.js";

const votesStore = createStore(votesReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={votesStore}>
    <App />
  </Provider>
);
