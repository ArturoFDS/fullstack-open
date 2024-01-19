/* eslint-disable no-constant-condition */
import { useState } from "react";
import Statistics from "./components/Statistic";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <section
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button onClick={() => handleGoodClick()}>Handle good clicks</button>
        <button onClick={() => handleNeutralClick()}>
          Handle neutral clicks
        </button>
        <button onClick={() => handleBadClick()}>Handle bad clicks</button>
      </section>
      <section>
        <h1>Statistics</h1>
        {good || neutral || bad ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          "No given feedback"
        )}
      </section>
    </div>
  );
};

export default App;
