import { Router } from "express";
import { User } from "../../schemas/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = Router();

router.get("/users", (req, res) => {
  User.find()
    .then((users) => {
      console.log(users);
      res.status(200).json({
        message: "Users successfully retrieved",
        data: users,
      });
    })
    .catch((eror) => res.status(400).json({ errorMessage: error.message }));
});

router.post("/users/register", (req, res) => {
  const { name, username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  User.create({
    name,
    username,
    password: hashedPassword,
  })
    .then((user) => {
      console.log(user);
      res.status(201).json({
        message: "User created",
        data: user,
      });
    })
    .catch((error) => res.status(400).json({ errorMessage: error.message }));
});

router.post("/users/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  User.findOne({ username }).then((user) => {
    try {
      const comparePassword = bcrypt.compareSync(password, user.password);
      if (comparePassword) {
        console.log(user.id);
        const token = jwt.sign(user.id, process.env.JWT_SECRET);
        res.cookie("IToken", token);
        res.status(200).json({
          message: "Successfully logged in",
          body: user
        });
      } else {
        res.status(401).json({
          message: "Wrong credentials!",
        });
      }
    } catch (error) {
      res.status(200);
    }
  });
});

export default router;
