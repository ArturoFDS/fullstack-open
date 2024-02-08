import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const votes = useSelector((state) => state);
  return (
    <div>
      <button onClick={() => dispatch({ type: "GOOD" })}>good</button>
      <button onClick={() => dispatch({ type: "OK" })}>ok</button>
      <button onClick={() => dispatch({ type: "BAD" })}>bad</button>
      <button onClick={() => dispatch({ type: "RESET STATS" })}>
        reset stats
      </button>
      <div>ok {votes.ok}</div>
      <div>good {votes.good}</div>
      <div>bad {votes.bad}</div>
    </div>
  );
};

export default App;
