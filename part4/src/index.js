console.clear(); //clearing console output after every refresh
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { databaseConnection } from "../mongo_connection.js";
import blogsRoutes from "./routes/blogs.routes.js";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
  })
);
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api", blogsRoutes);
app.use("/api", userRoutes);
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `The server is successfully running on http://localhost:${process.env.SERVER_PORT} 🙌🚀`
  );
  databaseConnection();
});
