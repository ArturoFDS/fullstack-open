const TotalExercises = ({ parts, courseID }) => {
  console.log(parts);
  return (
    <div>
      <br />
      <strong>
        <span>
          The total number of exercises is: {parts[courseID - 1].exercises}
        </span>
      </strong>
    </div>
  );
};

export default TotalExercises;
