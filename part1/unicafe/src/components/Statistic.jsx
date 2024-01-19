import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  const sumOfThree = good + neutral + bad;
  const positiveFeedback = good / sumOfThree * 100
  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="All Feedback" value={sumOfThree} />
      <StatisticsLine text="Average Feedback" value={sumOfThree / 3} />
      <StatisticsLine text="Positive Feedback" value={positiveFeedback} />
    </div>
  );
};

export default Statistics;
