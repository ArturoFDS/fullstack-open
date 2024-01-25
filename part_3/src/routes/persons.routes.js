import { Router } from "express";
const router = Router();
const phonebook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

router.get("/persons", (req, res) => {
  res.status(200).send(phonebook);
});

router.get("/info", (req, res) => {
  const currentDate = new Date();
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const usDateFormat = currentDate.toLocaleDateString("en-US", options);
  const phoneBookLength = phonebook.length;
  const htmlContent = `<span> There are only ${phoneBookLength} person in the phonebook</span> <br> <br> <span>${usDateFormat}</span>`;
  res.send(htmlContent);
});

router.get("/persons/:id", (req, res) => {
  try {
    const person = phonebook.filter(
      (person) => person.id === parseInt(req.params.id)
    );
    console.log(person);
    res.status(200).send(person);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

router.post("/persons/create", (req, res) => {
  try {
    const newPerson = {
      id: Math.floor(Math.random() * 51283),
      name: "Mary Poppeye",
      number: "040-123456",
    };

    const findMatchesByName = phonebook.filter(
      (person) => person.name === newPerson.name
    );
    const findMatchesByNumber = phonebook.filter(
      (person) => person.number === newPerson.number
    );
    if (findMatchesByName.length) {
      throw Error(
        `A person with the same name already exists: ${newPerson.name}`
      );
    }
    if (findMatchesByNumber.length) {;
      throw Error(
        `A person with the same number already exists: ${newPerson.number}`
      );
    }
    const newUser = phonebook.concat(newPerson);

    res.status(201).json({
      message: "User succesfully created",
      phonebook: newUser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.delete("/persons/delete/:id", (req, res) => {
  try {
    const deletePerson = phonebook.filter(
      (person) => person.id !== parseInt(req.params.id)
    );
    console.log(deletePerson);
    res.status(200).json({
      message: "User successfully deleted",
      persons: deletePerson,
    });
  } catch (error) {
    res.status(204).json({
      error: error,
      message: "The user does not exists, so it cannot be deleted",
    });
  }
});
export default router;
