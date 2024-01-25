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
      error: error,
    });
  }
});
export default router;