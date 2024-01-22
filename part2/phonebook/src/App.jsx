import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleAddPerson = (event) => {
    persons.map((person) => {
      if (person.name === newName) {
        window.alert(`${newName} already exists on the persons useState`)
        console.log(person.name)
      }
    })
    event.preventDefault()
    console.log(persons)
    setPersons(persons.concat({name: newName}));
    setNewName('')
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={(e) => handleAddPerson(e)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <section style={{
        display: "flex",
        flexDirection: 'column',
        gap: '4px'
      }}>

      {persons.map((person) => (
        <span key={person.name}>{person.name}</span>
      ))}
      </section>
    </div>
  );
};

export default App;
