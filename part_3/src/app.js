console.clear();
import express from "express";
import personsRoutes from "./routes/persons.routes.js";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { databaseConnect } from "../mongo.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const requestLogger = (req, res, next) => {
  console.log("Method", req.method);
  console.log("Path", req.path);
  console.log("Body", req.body);
  console.log("___");
  next();
};
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "Unknown endpoint" });
};
app.use(cors());
app.use(morgan('dev'));
app.use(requestLogger);

app.use("/api", personsRoutes);
app.use(unknownEndpoint);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`The server is running on http://localhost:${process.env.SERVER_PORT} 🙌`);
  databaseConnect();
});
