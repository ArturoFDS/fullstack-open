const NumbersContainer = ({ data }) => {
  return (
    <>
      {data.map((person) => (
        <span key={person.name}>
          {person.name}: <strong>{person.number}</strong>
        </span>
      ))}
    </>
  );
};

export default NumbersContainer;
