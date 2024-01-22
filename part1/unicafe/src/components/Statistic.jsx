import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  const sumOfThree = good + neutral + bad;
  const positiveFeedback = (good / sumOfThree) * 100;
  return (
    <div>
      <table>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="All Feedback" value={sumOfThree} />
        <StatisticsLine text="Average Feedback" value={sumOfThree / 3} />
        <StatisticsLine text="Positive Feedback" value={positiveFeedback} />
      </table>
    </div>
  );
};

export default Statistics;
