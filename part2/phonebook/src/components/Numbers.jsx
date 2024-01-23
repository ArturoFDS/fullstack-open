import DeleteButton from "./Delete";

const NumbersContainer = ({ data, onClickDeleteFunction }) => {
  return (
    <>
      {data.map((person) => (
        <span key={person.name}>
          {person.name}: <strong>{person.number}</strong>
          <DeleteButton onClickFunction={() => onClickDeleteFunction(person.id, person.name)} />
        </span>
      ))}
    </>
  );
};

export default NumbersContainer;
