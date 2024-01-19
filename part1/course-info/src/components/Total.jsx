const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <p>
        The total ammount of exercises is {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  );
};

export default Total;
