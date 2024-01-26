import { useState } from "react";
import Filter from "./components/Filter";
import PhoneBookForm from "./components/Form";
import NumbersContainer from "./components/Numbers";
import { useEffect } from "react";
import {
  addPersonAndNumber,
  deletePerson,
  getAllPersons,
  updatePerson,
} from "./api/fetching";
import MessageNotification from "./utils/MessageNotification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  const fetchPersons = () => {
    try {
      const data = getAllPersons();
      data.then((response) => {
        setPersons(response);
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => fetchPersons(), []);

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
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      window.alert(`${newName} already exists`);
      const confirmed = window.confirm(
        `${existingPerson.name} already exists, want to update the number linked to that person?`
      );
      if (confirmed) {
        const data = {
          ...existingPerson,
          number: newNumber,
        };
        updatePerson(data, existingPerson.id)
          .then((response) => console.log(response))
          .finally(() => setTimeout(() => fetchPersons(), 5000));
      }
    } else if (persons.some((person) => person.number === newNumber)) {
      window.alert(`${newNumber} already exists`);
      throw new Error("Number already exists");
    } else if (newName === "") {
      window.alert("Need to add a name");
      return null;
    } else if (newNumber === "") {
      window.alert("Need to add a number");
      return null;
    } else if (newName.length < 3) {
      window.alert("Name must have at least three leters (3)");
      return null;
    } else {
      const newPerson = {
        id: Math.floor(Math.random() * 10000),
        name: newName,
        number: newNumber,
      };
      addPersonAndNumber(newPerson)
        .then(() => {
          console.log(newPerson);
          setMessageType("success");
          setMessage(`${newPerson.name} has been created`);
        })
        .catch(() => {
          setMessageType("error");
          setMessage(`We were unable to create ${newPerson}`);
        })
        .finally(() =>
          setTimeout(() => {
            setMessageType(null);
            fetchPersons();
          }, 5000)
        );
      setNewName("");
      setNewNumber("");
    }
  };

  const handleDeletePerson = (id, name) => {
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirm) {
      setSearchValue("");
      deletePerson(id)
        .then(() => {
          setMessageType("success");
          setMessage(`${name} successfully deleted`);
          fetchPersons();
        })
        .catch(() => {
          setMessageType("error");
          setMessage(`It was not possible to delete ${name} `);
        })
        .finally(() =>
          setTimeout(() => {
            setMessageType(null);
          }, 5000)
        );
    }
  };

  const filteredData = searchValue
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [...persons];

  return (
    <div>
      <section>
        <h2>Search by name</h2>
        <Filter onChangeHandler={handleSearchInputChange} />
      </section>
      <h2>Phonebook</h2>
      <section>
        <MessageNotification message={message} type={messageType} />
      </section>
      <PhoneBookForm
        onChangeName={handleNameInputChange}
        onChangeNumber={handleNumberInputChange}
        addOnClick={handleAddPerson}
        valueName={newName}
        valueNumber={newNumber}
      />
      <h2>Numbers</h2>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <NumbersContainer
          onClickDeleteFunction={handleDeletePerson}
          data={filteredData}
        />
      </section>
    </div>
  );
};

export default App;
