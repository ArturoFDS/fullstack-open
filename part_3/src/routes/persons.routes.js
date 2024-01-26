import { Router } from "express";
import { phoneModel } from "../schemas/Phonebook.js";
const router = Router();

router.get("/persons", (req, res) => {
  phoneModel
    .find()
    .then((phonebook) => {
      res.status(200).json({
        message: "Phonebook successfully retrieved",
        data: phonebook,
      });
    })
    .catch((error) => {
      res.status(404).json({
        errorMessage: error.message,
      });
    });
});

router.get("/info", (req, res) => {
  const currentDate = new Date();
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const usDateFormat = currentDate.toLocaleDateString("en-US", options);
  phoneModel
    .find()
    .then((phonebook) => {
      const htmlContent = `<span> There are only ${phonebook.length} person in the phonebook</span> <br> <br> <span>${usDateFormat}</span>`;
      res.send(htmlContent);
    })
    .catch((error) => {
      res.status(400).json({
        errorMessage: error.message,
      });
    });
});

router.get("/persons/:id", (req, res) => {
  const { id } = req.params;
  phoneModel
    .findOne({ _id: id })
    .then((phonebook) =>
      res.status(200).json({
        message: "Phonebook successfully retrieved",
        data: phonebook,
      })
    )
    .catch((error) =>
      res.status(400).json({
        errorMessage: error.message,
      })
    );
});

router.post("/persons/create", (req, res) => {
  const { name, number } = req.body;
  phoneModel
    .create({
      name,
      number,
    })
    .then((phonebook) =>
      res.status(201).json({
        message: "Phonebook data added succesfully",
        data: phonebook,
      })
    )
    .catch((error) =>
      res.status(400).json({
        errorMessage: error.message,
      })
    );
});

router.delete("/persons/delete/:id", (req, res) => {
  const { id } = req.params;
  phoneModel
    .deleteOne({
      _id: id,
    })
    .then((result) => {
      res.status(200).json({
        message: "Successfully deleted",
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).json({
        errorMessage: error.message,
      });
    });
});

router.put("/persons/update/:id", (req, res) => {
  const { id } = req.params;
  const { number } = req.body;
  phoneModel
    .updateOne(
      { _id: id },
      {
        number,
      }
    )
    .then((phonebook) =>
      res.status(202).json({
        message: "Phone successfully updated",
        data: phonebook,
      })
    )
    .catch((error) => {
      res.status(400).json({
        errorMessage: error.message,
      });
    });
});
export default router;
