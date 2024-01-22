import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "809-234-5234" },
    { name: "John Doe", number: "123-456-7890" },
    { name: "Jane Smith", number: "987-654-3210" },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleNameInputChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    persons.map((person) => {
      if (person.name === newName) {
        window.alert(`${newName} already exists on the persons useState`);
        console.log(person.name);
      } else if (person.number === newNumber) {
        window.alert(`${newNumber} already exists on the numbers useState`);
      }
    });
    if (newName === "") {
      window.alert("Need to add a name");
      return null;
    } else if (newNumber === "") {
      window.alert("Need to add a number");
      return null;
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const filteredData = searchValue ? persons.filter((person) => person.name.toLowerCase().includes(searchValue.toLowerCase())) : [...persons]

  return (
    <div>
      <section>
        <h2>Search by name</h2>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleSearchInputChange(e)}
        />
      </section>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => {
              handleNameInputChange(e);
            }}
          />
        </div>
        <div>
          number
          <input
            value={newNumber}
            onChange={(e) => handleNumberInputChange(e)}
          />
        </div>
        <div>
          <button type="submit" onClick={(e) => handleAddPerson(e)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {filteredData.map((person) => (
          <span key={person.name}>
            {person.name}: <strong>{person.number}</strong>
          </span>
        ))}
      </section>
    </div>
  );
};

export default App;
