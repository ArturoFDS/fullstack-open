const Total = ({ parts }) => {
  return (
    <div>
      <p>
        The total ammount of exercises is {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  );
};

export default Total;
